import { Module } from '@nestjs/common';
import { ParcelpostsService } from './parcelposts.service';
import { ParcelpostsResolver } from './parcelposts.resolver';

@Module({
  providers: [ParcelpostsResolver, ParcelpostsService],
})
export class ParcelpostsModule {}
