import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  providers: [],
  imports: [NatsModule],
})
export class CategoryModule {}
