import { InputType, OmitType } from '@nestjs/graphql';
import { Parcelpost } from '../entities/parcelpost.entity';

@InputType()
export class UpdateParcelpostInput extends OmitType(
  Parcelpost,
  ['createdAt', 'updatedAt'],
  InputType,
) {}
