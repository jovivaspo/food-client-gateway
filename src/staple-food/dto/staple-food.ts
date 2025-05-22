import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { MicronutrientDto } from 'src/micronutrient/dto/micronutrient.dto';

export enum OriginType {
  ANIMAL = 'ANIMAL',
  VEGETAL = 'VEGETAL',
  SYNTHETIC = 'SYNTHETIC',
  MINERAL = 'MINERAL',
  MICROBIAL = 'MICROBIAL',
}

export enum AllergenType {
  NONE = 'NONE',
  GLUTEN = 'GLUTEN',
  LACTOSE = 'LACTOSE',
  NUTS = 'NUTS',
  PEANUTS = 'PEANUTS',
  SOY = 'SOY',
  EGGS = 'EGGS',
  FISH = 'FISH',
  SHELLFISH = 'SHELLFISH',
  CELERY = 'CELERY',
  MUSTARD = 'MUSTARD',
  SESAME = 'SESAME',
  SULFITES = 'SULFITES',
  LUPIN = 'LUPIN',
  MOLLUSCS = 'MOLLUSCS',
}

export class StapleFoodMicronutrientDto {
  @ApiProperty({
    description: 'Unique identifier of the staple food micronutrient',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Micronutrient information',
    type: MicronutrientDto,
  })
  micronutrient: MicronutrientDto;

  @ApiProperty({
    description: 'Amount of the micronutrient per serving',
    example: 0.5,
  })
  amount: number;
}

export class StapleFoodDto {
  @ApiProperty({
    description: 'UUID of the micronutrient to associate',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Name of the staple food',
    example: 'Rice',
  })
  name: string;

  @ApiProperty({
    description: 'Types of allergens present in the food',
    enum: AllergenType,
    isArray: true,
    example: [AllergenType.NONE],
  })
  allergenType: AllergenType[];

  @ApiProperty({
    description: 'Origin of the food',
    enum: OriginType,
    example: OriginType.VEGETAL,
  })
  origin: OriginType;

  @ApiPropertyOptional({
    description: 'Size of one serving',
    example: 100,
    default: 0,
  })
  servingSize?: number = 0;

  @ApiPropertyOptional({
    description: 'Unit of measurement for serving size (e.g., g, ml)',
    example: 'g',
    default: '',
  })
  servingMeasurement?: string = '';

  @ApiProperty({
    description: 'Calories per serving',
    example: 130,
    default: 0,
  })
  calories: number = 0;

  @ApiProperty({
    description: 'Protein content in grams per serving',
    example: 2.7,
    default: 0,
  })
  proteins: number = 0;

  @ApiProperty({
    description: 'Carbohydrate content in grams per serving',
    example: 28,
    default: 0,
  })
  carbohydrates: number = 0;

  @ApiProperty({
    description: 'Fiber content in grams per serving',
    example: 28,
    default: 0,
  })
  fiber: number = 0;

  @ApiProperty({
    description: 'Total fat content in grams per serving',
    example: 0.3,
    default: 0,
  })
  fats: number = 0;

  @ApiProperty({
    description: 'Saturated fat content in grams per serving',
    example: 0.1,
    default: 0,
  })
  saturatedFats: number = 0;

  @ApiProperty({
    description: 'Sugar content in grams per serving',
    example: 0.1,
    default: 0,
  })
  sugars: number = 0;

  @ApiProperty({
    description: 'List of micronutrients present in the food',
    type: () => [StapleFoodMicronutrientDto],
  })
  micronutrients: StapleFoodMicronutrientDto[];
}
