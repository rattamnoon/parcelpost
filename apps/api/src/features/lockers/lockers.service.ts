import { Locker } from '@/database/entities/locker.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLockerInput } from './dto/create-locker.input';
import { UpdateLockerInput } from './dto/update-locker.input';

@Injectable()
export class LockersService {
  constructor(
    @InjectRepository(Locker)
    private lockerRepository: Repository<Locker>,
  ) {}

  async create(createLockerInput: CreateLockerInput) {
    const createLocker = this.lockerRepository.create({
      ...createLockerInput,
    });

    return this.lockerRepository.save(createLocker);
  }

  async findAll() {
    return this.lockerRepository.find();
  }

  async findOne(id: number) {
    return this.lockerRepository.findOneBy({ id });
  }

  async update(id: number, updateLockerInput: UpdateLockerInput) {
    return this.lockerRepository.update(id, updateLockerInput);
  }

  async remove(id: number) {
    return this.lockerRepository.softDelete(id);
  }

  async master() {
    const arrs = Array.from({ length: 20 }, (_, i) => i + 1);
    const masters = arrs.map((arr) => ({
      code: `L-0001`.slice(0, 2) + arr.toString().padStart(2, '0'),
      building: 'A',
    }));

    return this.lockerRepository.save(masters);
  }
}
