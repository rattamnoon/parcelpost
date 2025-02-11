import { Locker } from '@/database/entities/locker.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LockersResolver } from './lockers.resolver';
import { LockersService } from './lockers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Locker])],
  providers: [LockersResolver, LockersService],
  exports: [LockersService],
})
export class LockersModule {}
