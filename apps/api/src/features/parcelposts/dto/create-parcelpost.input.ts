import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateParcelpostInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
