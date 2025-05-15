import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { BrandController } from './brand.controller';

@Module({
  controllers: [BrandController],
  providers: [],
  imports: [NatsModule],
})
export class CategoryModule {}
