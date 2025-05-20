import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { MicronutrientController } from './additive.controller';

@Module({
  controllers: [MicronutrientController],
  providers: [],
  imports: [NatsModule],
})
export class MicronutrientModule {}
