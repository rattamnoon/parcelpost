import { ParcelPost } from '@/database/entities/parcelpost.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParcelpostInput } from './dto/create-parcelpost.input';
import { UpdateParcelpostInput } from './dto/update-parcelpost.input';

@Injectable()
export class ParcelpostsService {
  constructor(
    @InjectRepository(ParcelPost)
    private parcelpostRepository: Repository<ParcelPost>,
  ) {}

  async create(createParcelpostInput: CreateParcelpostInput) {
    const createParcelpost = this.parcelpostRepository.create({
      ...createParcelpostInput,
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
