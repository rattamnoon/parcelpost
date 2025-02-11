import { CreateParcelpostInput } from './create-parcelpost.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateParcelpostInput extends PartialType(CreateParcelpostInput) {
  @Field(() => Int)
  id: number;
}
