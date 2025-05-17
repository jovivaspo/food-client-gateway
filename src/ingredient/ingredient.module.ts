import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { IngredientController } from './ingredient.controller';

@Module({
  controllers: [IngredientController],
  imports: [NatsModule],
})
export class IngredientModule {}
