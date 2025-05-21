import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import {
  AdditiveRating,
  AdditiveType,
  HealthConcernType,
  OriginType,
} from './additive.dto';

export class CreateAdditiveDto {
  @ApiProperty({
    description: 'Name of the additive',
    example: 'Ascorbic acid',
  })
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Scientific name of the additive',
    example: 'L-ascorbic acid',
    required: false,
  })
  scientificName?: string;

  @ApiProperty({
    description: 'Detailed description of the additive',
    example:
      'A naturally occurring organic compound with antioxidant properties',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(OriginType)
  @ApiProperty({
    description: 'Origin/source of the additive',
    enum: OriginType,
    example: OriginType.SYNTHETIC,
  })
  origin: OriginType;

  @ApiProperty({
    description: 'Type/function of the additive',
    enum: AdditiveType,
    example: AdditiveType.ANTIOXIDANT,
  })
  @IsArray()
  @IsEnum(AdditiveType, {
    each: true,
    message: 'Each additive type must be a valid AdditiveType enum value',
  })
  additiveType: AdditiveType[];

  @ApiProperty({
    description:
      'List of potential health concerns associated with the additive',
    type: [String],
    enum: HealthConcernType,
    isArray: true,
    example: [HealthConcernType.ALLERGENIC],
  })
  @IsArray()
  @IsEnum(HealthConcernType, {
    each: true,
    message: 'Each health concern must be a valid HealthConcernType enum value',
  })
  healthConcerns: HealthConcernType[];

  @ApiProperty({
    description: 'Safety rating of the additive',
    enum: AdditiveRating,
    example: AdditiveRating.SAFE,
  })
  @IsEnum(AdditiveRating)
  rating: AdditiveRating;
}
