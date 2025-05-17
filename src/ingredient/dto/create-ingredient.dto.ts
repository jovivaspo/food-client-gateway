import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

import {
  AdditiveType,
  AllergenType,
  OriginType,
  RiskLevel,
  RiskType,
} from './types';

export class CreateIngredientRiskDto {
  @ApiProperty({
    enum: RiskType,
    description: 'Type of risk associated with the ingredient',
  })
  @IsEnum(RiskType)
  riskType: RiskType;

  @ApiProperty({ enum: RiskLevel, description: 'Level of risk' })
  @IsEnum(RiskLevel)
  level: RiskLevel;
}

export class CreateIngredientMicronutrientDto {
  @ApiProperty({ description: 'ID of the micronutrient' })
  @IsString()
  micronutrientId: string;

  @ApiProperty({ description: 'Amount of the micronutrient', minimum: 0 })
  @IsNumber()
  @IsPositive()
  amount: number;
}

export class CreateIngredientDto {
  @ApiProperty({ description: 'Name of the ingredient' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Scientific name of the ingredient',
    required: false,
  })
  @IsString()
  @IsOptional()
  scientificName?: string;

  @ApiProperty({ description: 'Whether this is a basic food ingredient' })
  @IsBoolean()
  isBasicFood: boolean;

  @ApiProperty({
    description: 'Description of the ingredient',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    enum: AllergenType,
    description: 'Type of allergen if applicable',
    required: false,
  })
  @IsEnum(AllergenType)
  @IsOptional()
  allergenType?: AllergenType;

  @ApiProperty({ enum: OriginType, description: 'Origin of the ingredient' })
  @IsEnum(OriginType)
  origin: OriginType;

  @ApiProperty({
    enum: AdditiveType,
    description: 'Type of additive if applicable',
    required: false,
  })
  @IsEnum(AdditiveType)
  @IsOptional()
  additiveType?: AdditiveType;

  @ApiProperty({
    description: 'Serving size in specified measurement',
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  servingSize?: number;

  @ApiProperty({
    description: 'Unit of measurement for serving size',
    required: false,
  })
  @IsString()
  @IsOptional()
  servingMeasurement?: string;

  @ApiProperty({ description: 'Calories per serving', minimum: 0 })
  @IsNumber()
  @IsPositive()
  calories: number;

  @ApiProperty({
    description: 'Protein content in grams',
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  proteins?: number;

  @ApiProperty({
    description: 'Carbohydrate content in grams',
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  carbohydrates?: number;

  @ApiProperty({
    description: 'Sugar content in grams',
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  sugars?: number;

  @ApiProperty({
    description: 'Total fat content in grams',
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  fats?: number;

  @ApiProperty({
    description: 'Saturated fat content in grams',
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  saturatedFats?: number;

  @ApiProperty({
    description: 'Fiber content in grams',
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  fiber?: number;

  @ApiProperty({
    type: [CreateIngredientRiskDto],
    description: 'Associated risks',
    required: false,
  })
  @ValidateNested({ each: true })
  @Type(() => CreateIngredientRiskDto)
  @IsOptional()
  risks?: CreateIngredientRiskDto[];

  @ApiProperty({
    type: [CreateIngredientMicronutrientDto],
    description: 'Associated micronutrients',
    required: false,
  })
  @ValidateNested({ each: true })
  @Type(() => CreateIngredientMicronutrientDto)
  @IsOptional()
  micronutrients?: CreateIngredientMicronutrientDto[];
}
