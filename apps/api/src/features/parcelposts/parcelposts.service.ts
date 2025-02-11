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

    const code = `P-${dayjs().format('DDMMYYYY')}-${lastCode.toString().padStart(5, '0')}`;

    return code;
  }

  async create(createParcelpostInput: CreateParcelpostInput) {
    const code = await this.generateCode();

    const createParcelpost = this.parcelpostRepository.create({
      ...createParcelpostInput,
      code,
    });

    return this.parcelpostRepository.save(createParcelpost);
  }

  async findAll() {
    return this.parcelpostRepository.find();
  }

  async findOne(id: string) {
    return this.parcelpostRepository.findOneBy({ id });
  }

  async update(id: string, updateParcelpostInput: UpdateParcelpostInput) {
    return this.parcelpostRepository.update(id, updateParcelpostInput);
  }

  async remove(id: string) {
    return this.parcelpostRepository.softDelete(id);
  }
}
