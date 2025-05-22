import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { StapleFoodController } from './staple-food.controller';

@Module({
  controllers: [StapleFoodController],
  providers: [],
  imports: [NatsModule],
})
export class StapleFoodModule {}
