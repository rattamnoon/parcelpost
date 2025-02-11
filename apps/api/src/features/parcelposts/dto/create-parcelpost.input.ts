import { InputType, OmitType } from '@nestjs/graphql';
import { Parcelpost } from '../entities/parcelpost.entity';

@InputType()
export class CreateParcelpostInput extends OmitType(
  Parcelpost,
  ['id', 'code', 'createdAt', 'updatedAt'],
  InputType,
) {}
