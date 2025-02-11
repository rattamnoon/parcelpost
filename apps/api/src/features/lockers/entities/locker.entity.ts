import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Locker {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  code: string;

  @Field(() => String, { nullable: true })
  building: string;

  @Field(() => String, { nullable: true })
  size: string;

  @Field(() => String, { nullable: true })
  location: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
