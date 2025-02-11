import { Locker } from '@/database/entities/locker.entity';
import { ParcelPost } from '@/database/entities/parcelpost.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcelpostsResolver } from './parcelposts.resolver';
import { ParcelpostsService } from './parcelposts.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParcelPost, Locker])],
  providers: [ParcelpostsResolver, ParcelpostsService],
  exports: [ParcelpostsService],
})
export class ParcelpostsModule {}
