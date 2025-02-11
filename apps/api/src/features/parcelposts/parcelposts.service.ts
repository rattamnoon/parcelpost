import { Locker } from '@/database/entities/locker.entity';
import { ParcelPost } from '@/database/entities/parcelpost.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { Between, Repository } from 'typeorm';
import { CreateParcelpostInput } from './dto/create-parcelpost.input';
import { UpdateParcelpostInput } from './dto/update-parcelpost.input';

@Injectable()
export class ParcelpostsService {
  constructor(
    @InjectRepository(ParcelPost)
    private parcelpostRepository: Repository<ParcelPost>,
    @InjectRepository(Locker)
    private lockerRepository: Repository<Locker>,
  ) {}

  async generateCode(): Promise<string> {
    const lastCode = await this.parcelpostRepository.count({
      where: {
        createdAt: Between(
          dayjs().startOf('day').toDate(),
          dayjs().endOf('day').toDate(),
        ),
      },
    });

    const code = `P-${dayjs().format('DDMMYYYY')}-${(lastCode + 1).toString().padStart(5, '0')}`;

    return code;
  }

  async create(createParcelpostInput: CreateParcelpostInput) {
    const code = await this.generateCode();

    const locker = await this.lockerRepository.findOne({
      where: { lock: false },
      order: { id: 'ASC' },
    });

    if (locker) {
      locker.lock = true;

      await this.lockerRepository.save(locker);
    }

    const createParcelpost = this.parcelpostRepository.create({
      ...createParcelpostInput,
      code,
      lockerId: locker?.id,
    });

    return this.parcelpostRepository.save(createParcelpost);
  }

  async nitiReceiver(id: string) {
    const parcelpost = await this.parcelpostRepository.findOneBy({ id });

    parcelpost.nitiReceiverDate = dayjs().toDate();
    parcelpost.status = 'นิติรับแล้ว';

    return this.parcelpostRepository.save(parcelpost);
  }

  async customerReceiver(id: string) {
    const parcelpost = await this.parcelpostRepository.findOneBy({ id });

    parcelpost.customerReceiverDate = dayjs().toDate();
    parcelpost.status = 'รับแล้ว';

    if (parcelpost?.lockerId) {
      const locker = await this.lockerRepository.findOneBy({
        id: parcelpost.lockerId,
      });

      locker.lock = false;

      await this.lockerRepository.save(locker);
    }

    return this.parcelpostRepository.save(parcelpost);
  }

  async findAll(status: string, unitCode: string) {
    return this.parcelpostRepository.find({
      where: {
        ...(status ? { status } : {}),
        ...(unitCode ? { unitCode } : {}),
      },
      relations: { locker: true },
    });
  }

  async findOne(id: string) {
    return this.parcelpostRepository.findOneBy({ id });
  }

  async findOneByCode(code: string) {
    return this.parcelpostRepository.findOneBy({ code });
  }

  async update(id: string, updateParcelpostInput: UpdateParcelpostInput) {
    return this.parcelpostRepository.update(id, updateParcelpostInput);
  }

  async remove(id: string) {
    return this.parcelpostRepository.softDelete(id);
  }
}
