import { ApiProperty } from '@nestjs/swagger';

export enum TypeMicronutrient {
  VITAMIN,
  MINERAL,
  FATTY_ACID,
  AMINO_ACID,
  ANTIOXIDANT_COMPOUND,
  PROBIOTIC,
  PHYTONUTRIENT,
}

export enum SolubilityType {
  FAT_SOLUBLE,
  WATER_SOLUBLE,
  INORGANIC,
  BIOCONVERTIBLE,
  AMPHIPHILIC,
  TRANSPORT_DEPENDENT,
  N_A,
}

export enum FunctionType {
  VISION,
  IMMUNE_SUPPORT,
  ENERGY_METABOLISM,
  BONE_HEALTH,
  BLOOD_HEALTH,
  ANTIOXIDANT,
  NEUROTRANSMITTER,
  CELL_GROWTH,
  OXYGEN_TRANSPORT,
  ENZYMATIC,
  ELECTROLYTE,
  HORMONE_REGULATION,
  GLUCOSE_REGULATION,
  ANTI_INFLAMMATORY,
  CARDIOPROTECTIVE,
  NEUROPROTECTIVE,
  ESSENTIAL_FATTY_ACID,
  COLLAGEN,
  MUSCLE_GROWTH,
  GUT_BARRIER,
  NUTRIENT_ABSORPTION,
  HORMONE_PRECURSOR,
  SKIN_HEALTH,
  ANTI_CANCER,
  IMMUNE_MODULATOR,
  STRUCTURAL,
  DETOXIFICATION,
  GUT_MICROBIOME,
  DNA_SYNTHESIS,
  LIGHT_FILTER,
}

export enum EssentialityType {
  ESSENTIAL,
  CONDITIONALLY_ESSENTIAL,
  NON_ESSENTIAL,
  BENEFICIAL,
  UNCLEAR,
}

export enum SourceType {
  EXOGENOUS,
  ENDOGENOUS,
  PARTIAL_SYNTHESIS,
  MICROBIOTA,
  DUAL_SOURCE,
  CONDITIONAL_SYNTHESIS,
  STORAGE_DEPENDENT,
  SYNTHETIC,
}

export enum BioactiveType {
  RETINOID,
  CAROTENOID,
  TOCOPHEROL,
  TOCOTRIENOL,
  NAPHTHOQUINONE,
  SECOSTEROID,
  FLAVIN,
  NICOTINAMIDE,
  PYRIDOXINE,
  COBALAMIN,
  ASCORBATE,
  THIAMINE,
  FOLATE,
  PANTOTHENATE,
  BIOTIN,
  CHOLINE,
  ESSENTIAL_MINERAL,
  TRACE_ELEMENT,
  BIOFLAVONOID,
  POLYPHENOL,
  ORGANOSULFUR,
  XANTHOPHYLL,
  QUINONE,
  BETAINE,
  PHOSPHOLIPID,
  AMINO_ACID_DERIVATIVE,
  TERPENOID,
  ALKALOID,
  GLUCOSINOLATE,
  PHYTOSTEROL,
  PROBIOTIC_STRAIN,
  PREBIOTIC,
}

export class MicronutrientDto {
  @ApiProperty({
    description: 'Unique identifier of the micronutrient',
    example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  })
  id: string;

  @ApiProperty({
    description: 'Name of the micronutrient',
    example: 'Vitamin C',
  })
  name: string;

  @ApiProperty({
    description: 'Detailed description of the micronutrient',
    example: 'Essential water-soluble vitamin that acts as an antioxidant',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Type/category of the micronutrient',
    enum: TypeMicronutrient,
    example: TypeMicronutrient.VITAMIN,
  })
  type: TypeMicronutrient;

  @ApiProperty({
    description: 'Unit of measurement',
    example: 'mg',
  })
  unit: string;

  @ApiProperty({
    description: 'Recommended daily intake',
    example: '90mg/day for adults',
    required: false,
  })
  dailyRecommendation?: string;

  @ApiProperty({
    description: 'Upper limit for safe consumption',
    example: '2000mg/day',
    required: false,
  })
  tolerableLimit?: string;

  @ApiProperty({
    description: 'Solubility characteristics',
    enum: SolubilityType,
    example: SolubilityType.WATER_SOLUBLE,
  })
  solubility: SolubilityType;

  @ApiProperty({
    description: 'Biological functions of the micronutrient',
    type: [String],
    enum: FunctionType,
    isArray: true,
    example: [FunctionType.ANTIOXIDANT, FunctionType.IMMUNE_SUPPORT],
  })
  function: FunctionType[];

  @ApiProperty({
    description: 'Level of essentiality in human nutrition',
    enum: EssentialityType,
    example: EssentialityType.ESSENTIAL,
  })
  essentiality: EssentialityType;

  @ApiProperty({
    description: 'Source or origin of the micronutrient',
    enum: SourceType,
    example: SourceType.EXOGENOUS,
  })
  source: SourceType;

  @ApiProperty({
    description: 'Bioactive compound classification',
    enum: BioactiveType,
    example: BioactiveType.ASCORBATE,
  })
  bioactiveType: BioactiveType;

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
