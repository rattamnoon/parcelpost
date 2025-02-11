import { ParcelPost } from '@/database/entities/parcelpost.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcelpostsResolver } from './parcelposts.resolver';
import { ParcelpostsService } from './parcelposts.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParcelPost])],
  providers: [ParcelpostsResolver, ParcelpostsService],
  exports: [ParcelpostsService],
})
export class ParcelpostsModule {}
