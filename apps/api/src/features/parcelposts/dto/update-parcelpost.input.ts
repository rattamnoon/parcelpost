import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateParcelpostInput } from './create-parcelpost.input';

@InputType()
export class UpdateParcelpostInput extends PartialType(CreateParcelpostInput) {
  @Field(() => ID)
  id: string;
}
