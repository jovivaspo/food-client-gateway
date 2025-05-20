import { Module } from '@nestjs/common';

import { AdditiveModule } from './additive/additive.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { MicronutrientModule } from './micronutrient/micronutrient.module';

@Module({
  imports: [CategoryModule, BrandModule, MicronutrientModule, AdditiveModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
