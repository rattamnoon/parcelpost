import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Locker {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  code: string;

  @Field(() => String)
  building: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
