import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Parcelpost {
  @Field(() => ID)
  id: string;

  @Field()
  code: string;

  @Field({ nullable: true, description: 'รหัสพัสดุ' })
  parcelCode: string;

  @Field({ description: 'ชื่อผู้ส่ง', nullable: true })
  senderName: string;

  @Field({ description: 'ชื่อผู้รับ', nullable: true })
  receiverName: string;

  @Field({ description: 'ห้อง', nullable: true })
  unitCode: string;

  @Field({ description: 'สถานะพัสดุ' })
  status: string;

  @Field(() => Int, { nullable: true })
  lockerId: number;

  @Field(() => Date, { nullable: true })
  nitiReceiverDate: Date;

  @Field(() => Date, { nullable: true })
  customerReceiverDate: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
