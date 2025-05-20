import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { AdditiveController } from './additive.controller';

@Module({
  controllers: [AdditiveController],
  providers: [],
  imports: [NatsModule],
})
export class AdditiveModule {}
