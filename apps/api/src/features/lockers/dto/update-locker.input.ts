import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateLockerInput } from './create-locker.input';

@InputType()
export class UpdateLockerInput extends PartialType(CreateLockerInput) {
  @Field(() => Int)
  id: number;
}
