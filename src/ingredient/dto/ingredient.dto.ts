import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  AdditiveType,
  AllergenType,
  OriginType,
  RiskLevel,
  RiskType,
} from './types';

export class IngredientRiskDto {
  @ApiProperty({ enum: RiskType })
  riskType: RiskType;

  @ApiProperty({ enum: RiskLevel })
  level: RiskLevel;
}

export class IngredientMicronutrientDto {
  @ApiProperty()
  micronutrientId: string;

  @ApiProperty()
  amount: number;
}

export class IngredientDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  scientificName?: string;

  @ApiPropertyOptional()
  isBasicFood?: boolean;

  @ApiPropertyOptional()
  description?: string;

  @ApiProperty({ enum: AllergenType, default: AllergenType.NONE })
  allergenType: AllergenType;

  @ApiProperty({ enum: OriginType })
  origin: OriginType;

  @ApiProperty({ enum: AdditiveType, default: AdditiveType.NO })
  additiveType: AdditiveType;

  @ApiPropertyOptional()
  servingSize?: number;

  @ApiPropertyOptional()
  servingMeasurement?: string;

  @ApiProperty()
  calories: number;

  @ApiPropertyOptional()
  proteins?: number;

  @ApiPropertyOptional()
  carbohydrates?: number;

  @ApiPropertyOptional()
  sugars?: number;

  @ApiPropertyOptional()
  fats?: number;

  @ApiPropertyOptional()
  saturatedFats?: number;

  @ApiPropertyOptional()
  fiber?: number;

  @ApiPropertyOptional({ type: [IngredientRiskDto] })
  risks?: IngredientRiskDto[];

  @ApiPropertyOptional({ type: [IngredientMicronutrientDto] })
  micronutrients?: IngredientMicronutrientDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class CreateIngredientDto {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  scientificName?: string;

  @ApiPropertyOptional()
  isBasicFood?: boolean;

  @ApiPropertyOptional()
  description?: string;

  @ApiProperty({ enum: AllergenType, default: AllergenType.NONE })
  allergenType: AllergenType;

  @ApiProperty({ enum: OriginType })
  origin: OriginType;

  @ApiProperty({ enum: AdditiveType, default: AdditiveType.NO })
  additiveType: AdditiveType;

  @ApiPropertyOptional()
  servingSize?: number;

  @ApiPropertyOptional()
  servingMeasurement?: string;

  @ApiProperty()
  calories: number;

  @ApiPropertyOptional()
  proteins?: number;

  @ApiPropertyOptional()
  carbohydrates?: number;

  @ApiPropertyOptional()
  sugars?: number;

  @ApiPropertyOptional()
  fats?: number;

  @ApiPropertyOptional()
  saturatedFats?: number;

  @ApiPropertyOptional()
  fiber?: number;

  @ApiPropertyOptional({ type: [IngredientRiskDto] })
  risks?: IngredientRiskDto[];

  @ApiPropertyOptional({ type: [IngredientMicronutrientDto] })
  micronutrients?: IngredientMicronutrientDto[];
}

export class UpdateIngredientDto extends CreateIngredientDto {
  @ApiProperty()
  id: number;
}
