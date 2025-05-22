import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';
import { AllergenType, OriginType } from './staple-food';

export class CreateStableFoodMicronutrientDto {
  @ApiProperty({
    description: 'UUID of the micronutrient to associate',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  micronutrientId: string;

  @ApiProperty({
    description: 'Amount of the micronutrient per serving',
    example: 0.5,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  amount: number = 0;
}

export class CreateStapleFoodDto {
  @ApiProperty({
    description: 'Name of the staple food',
    example: 'Rice',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Types of allergens present in the food',
    enum: AllergenType,
    isArray: true,
    example: [AllergenType.NONE],
  })
  @IsArray()
  @IsEnum(AllergenType, {
    each: true,
    message: 'Each allergen type must be a valid AllergenType enum value',
  })
  allergenType: AllergenType[];

  @ApiProperty({
    description: 'Origin of the food',
    enum: OriginType,
    example: OriginType.VEGETAL,
  })
  @IsEnum(OriginType)
  origin: OriginType;

  @ApiPropertyOptional({
    description: 'Size of one serving',
    example: 100,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  servingSize?: number = 0;

  @ApiPropertyOptional({
    description: 'Unit of measurement for serving size (e.g., g, ml)',
    example: 'g',
    default: '',
  })
  @IsString()
  @IsOptional()
  servingMeasurement?: string = '';

  @ApiProperty({
    description: 'Calories per serving',
    example: 130,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  calories: number = 0;

  @ApiProperty({
    description: 'Protein content in grams per serving',
    example: 2.7,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  proteins: number = 0;

  @ApiProperty({
    description: 'Carbohydrate content in grams per serving',
    example: 28,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  carbohydrates: number = 0;

  @ApiProperty({
    description: 'Total fat content in grams per serving',
    example: 0.3,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  fats: number = 0;

  @ApiProperty({
    description: 'Saturated fat content in grams per serving',
    example: 0.1,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  saturatedFats: number = 0;

  @ApiProperty({
    description: 'Sugar content in grams per serving',
    example: 0.1,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  sugars: number = 0;

  @ApiProperty({
    description: 'List of micronutrients to associate with their amounts',
    type: [CreateStableFoodMicronutrientDto],
  })
  @IsArray()
  micronutrients: CreateStableFoodMicronutrientDto[];
}
