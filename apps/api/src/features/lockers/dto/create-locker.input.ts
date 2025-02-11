import { InputType, OmitType } from '@nestjs/graphql';
import { Locker } from '../entities/locker.entity';

@InputType()
export class CreateLockerInput extends OmitType(Locker, ['id'], InputType) {}
