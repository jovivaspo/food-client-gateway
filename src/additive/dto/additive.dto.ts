import { ApiProperty } from '@nestjs/swagger';

export enum OriginType {
  ANIMAL = 'ANIMAL',
  VEGETAL = 'VEGETAL',
  SYNTHETIC = 'SYNTHETIC',
  MINERAL = 'MINERAL',
  MICROBIAL = 'MICROBIAL',
}

export enum AdditiveType {
  SWEETENER = 'SWEETENER',
  PRESERVATIVE = 'PRESERVATIVE',
  COLORANT = 'COLORANT',
  EMULSIFIER = 'EMULSIFIER',
  FLAVOR_ENHANCER = 'FLAVOR_ENHANCER',
  STABILIZER = 'STABILIZER',
  THICKENER = 'THICKENER',
  ACIDULANT = 'ACIDULANT',
  BULKING_AGENT = 'BULKING_AGENT',
  COATING_AGENT = 'COATING_AGENT',
  ANTI_CAKING_AGENT = 'ANTI_CAKING_AGENT',
  ANTI_FOAMING_AGENT = 'ANTI_FOAMING_AGENT',
  ANTIOXIDANT = 'ANTIOXIDANT',
  CLARIFYING_AGENT = 'CLARIFYING_AGENT',
  COAGULANT = 'COAGULANT',
  COLOR_FIXATIVE = 'COLOR_FIXATIVE',
  GASES = 'GASES',
  RAISING_AGENT = 'RAISING_AGENT',
  GELLING_AGENT = 'GELLING_AGENT',
  HUMECTANT = 'HUMECTANT',
  ACIDITY_REGULATOR = 'ACIDITY_REGULATOR',
  FLAVORING = 'FLAVORING',
  MELTING_SALT = 'MELTING_SALT',
  SEQUESTRANT = 'SEQUESTRANT',
  FLOUR_TREATMENT_AGENT = 'FLOUR_TREATMENT_AGENT',
  VARIOUS = 'VARIOUS',
}

export enum HealthConcernType {
  CARCINOGENIC = 'CARCINOGENIC',
  ALLERGENIC = 'ALLERGENIC',
  INFLAMMATORY = 'INFLAMMATORY',
  ENDOCRINE_DISRUPTOR = 'ENDOCRINE_DISRUPTOR',
  NEUROTOXIC = 'NEUROTOXIC',
  MUTAGENIC = 'MUTAGENIC',
  HEPATOTOXIC = 'HEPATOTOXIC',
  CARDIOTOXIC = 'CARDIOTOXIC',
  OBESOGENIC = 'OBESOGENIC',
  HIGH_GI = 'HIGH_GI',
  ADDICTIVE = 'ADDICTIVE',
  CONTAMINAT = 'CONTAMINAT',
  ANTINUTRIENT = 'ANTINUTRIENT',
  RESPIRATORY_PROBLEMS = 'RESPIRATORY_PROBLEMS',
  DIGESTIVE_PROBLEMS = 'DIGESTIVE_PROBLEMS',
  BEHAVIORAL_DISORDERS = 'BEHAVIORAL_DISORDERS',
}

export enum AdditiveRating {
  AVOID = 'AVOID',
  CAUTION = 'CAUTION',
  SAFE = 'SAFE',
  SAFE_IN_MODERATION = 'SAFE_IN_MODERATION',
  CUT_BACK = 'CUT_BACK',
}

export class AdditiveDto {
  @ApiProperty({
    description: 'Unique identifier of the additive',
    example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  })
  id: string;

  @ApiProperty({
    description: 'Name of the additive',
    example: 'Ascorbic acid',
  })
  name: string;

  @ApiProperty({
    description: 'Detailed description of the additive',
    example:
      'A naturally occurring organic compound with antioxidant properties',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Scientific name of the additive',
    example: 'L-ascorbic acid',
    required: false,
  })
  scientificName?: string;

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
  additiveType: AdditiveType;

  @ApiProperty({
    description:
      'List of potential health concerns associated with the additive',
    type: [String],
    enum: HealthConcernType,
    isArray: true,
    example: [HealthConcernType.ALLERGENIC],
  })
  healthConcerns: HealthConcernType[];

  @ApiProperty({
    description: 'Safety rating of the additive',
    enum: AdditiveRating,
    example: AdditiveRating.SAFE,
  })
  rating: AdditiveRating;

  @ApiProperty({
    description: 'Creation date of the record',
    example: '2025-05-20T10:30:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last update date of the record',
    example: '2025-05-20T10:30:00Z',
  })
  updatedAt: Date;
}
