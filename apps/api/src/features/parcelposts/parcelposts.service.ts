import { Injectable } from '@nestjs/common';
import { CreateParcelpostInput } from './dto/create-parcelpost.input';
import { UpdateParcelpostInput } from './dto/update-parcelpost.input';

@Injectable()
export class ParcelpostsService {
  create(createParcelpostInput: CreateParcelpostInput) {
    return 'This action adds a new parcelpost';
  }

  findAll() {
    return `This action returns all parcelposts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parcelpost`;
  }

  update(id: number, updateParcelpostInput: UpdateParcelpostInput) {
    return `This action updates a #${id} parcelpost`;
  }

  remove(id: number) {
    return `This action removes a #${id} parcelpost`;
  }
}
