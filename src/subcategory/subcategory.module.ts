import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { SubcategoryController } from './subcategory.controller';

@Module({
  controllers: [SubcategoryController],
  providers: [],
  imports: [NatsModule],
})
export class SubcategoryModule {}
