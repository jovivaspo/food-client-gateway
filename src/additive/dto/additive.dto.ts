import { ApiProperty } from '@nestjs/swagger';

export enum OriginType {
  ANIMAL,
  VEGETAL,
  SYNTHETIC,
  MINERAL,
  MICROBIAL,
}

export enum AdditiveType {
  SWEETENER,
  PRESERVATIVE,
  COLORANT,
  EMULSIFIER,
  FLAVOR_ENHANCER,
  STABILIZER,
  THICKENER,
  ACIDULANT,
  BULKING_AGENT,
  COATING_AGENT,
  ANTI_CAKING_AGENT,
  ANTI_FOAMING_AGENT,
  ANTIOXIDANT,
  CLARIFYING_AGENT,
  COAGULANT,
  COLOR_FIXATIVE,
  GASES,
  RAISING_AGENT,
  GELLING_AGENT,
  HUMECTANT,
  ACIDITY_REGULATOR,
  FLAVORING,
  MELTING_SALT,
  SEQUESTRANT,
  FLOUR_TREATMENT_AGENT,
  VARIOUS,
}

enum HealthConcernType {
  CARCINOGENIC,
  ALLERGENIC,
  INFLAMMATORY,
  ENDOCRINE_DISRUPTOR,
  NEUROTOXIC,
  MUTAGENIC,
  HEPATOTOXIC,
  CARDIOTOXIC,
  OBESOGENIC,
  HIGH_GI,
  ADDICTIVE,
  CONTAMINAT,
  ANTINUTRIENT,
  RESPIRATORY_PROBLEMS,
  DIGESTIVE_PROBLEMS,
  BEHAVIORAL_DISORDERS,
}

enum AdditiveRating {
  AVOID,
  CAUTION,
  SAFE,
  SAFE_IN_MODERATION,
  CUT_BACK,
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
