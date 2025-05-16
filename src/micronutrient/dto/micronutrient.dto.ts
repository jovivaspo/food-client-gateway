export enum TypeMicronutrient {
  VITAMIN = 'Vitamina',
  MINERAL = 'Mineral',
  FATTY_ACID = 'Ácido graso',
  AMINO_ACID = 'Aminoácido',
  ANTIOXIDANT_COMPOUND = 'Antioxidante',
  PROBIOTIC = 'Probiótico',
  PHYTONUTRIENT = 'Fitonutriente',
}

export enum SolubilityType {
  FAT_SOLUBLE = 'Soluble en grasa',
  WATER_SOLUBLE = 'Soluble en agua',
  INORGANIC = 'Inorgánico / Iónico',
  BIOCONVERTIBLE = 'Requiere conversión metabólica',
  AMPHIPHILIC = 'Anfipático (hidrofílico y lipofílico)',
  TRANSPORT_DEPENDENT = 'Requiere transportador/cofactor',
  N_A = 'No aplica',
}

export enum FunctionType {
  VISION = 'Salud visual',
  IMMUNE_SUPPORT = 'Soporte inmunológico',
  ENERGY_METABOLISM = 'Metabolismo energético',
  BONE_HEALTH = 'Salud ósea',
  BLOOD_HEALTH = 'Salud sanguínea',
  ANTIOXIDANT = 'Antioxidante',
  NEUROTRANSMITTER = 'Síntesis de neurotransmisores',
  CELL_GROWTH = 'Crecimiento y reparación celular',
  OXYGEN_TRANSPORT = 'Transporte de oxígeno',
  ENZYMATIC = 'Cofactor enzimático',
  ELECTROLYTE = 'Balance de electrolitos',
  HORMONE_REGULATION = 'Regulación hormonal',
  GLUCOSE_REGULATION = 'Regulación de la glucosa',
  ANTI_INFLAMMATORY = 'Antiinflamatorio',
  CARDIOPROTECTIVE = 'Cardioprotector',
  NEUROPROTECTIVE = 'Neuroprotector',
  ESSENTIAL_FATTY_ACID = 'Ácido graso esencial',
  COLLAGEN = 'Formación de colágeno',
  MUSCLE_GROWTH = 'Crecimiento muscular',
  GUT_BARRIER = 'Integridad de la barrera intestinal',
  NUTRIENT_ABSORPTION = 'Absorción de nutrientes',
  HORMONE_PRECURSOR = 'Precursor hormonal',
  SKIN_HEALTH = 'Salud de la piel',
  ANTI_CANCER = 'Anticancerígeno',
  IMMUNE_MODULATOR = 'Modulador inmunológico',
  STRUCTURAL = 'Función estructural',
  DETOXIFICATION = 'Desintoxicación',
  GUT_MICROBIOME = 'Modulación de microbioma intestinal',
  DNA_SYNTHESIS = 'Síntesis de ADN',
  LIGHT_FILTER = 'Filtración de luz',
}

export enum EssentialityType {
  ESSENTIAL = 'Esencial',
  CONDITIONALLY_ESSENTIAL = 'Condicionalmente esencial',
  NON_ESSENTIAL = 'No esencial',
  BENEFICIAL = 'Beneficioso pero no esencial',
  UNCLEAR = 'Esencialidad no determinada',
}

export enum SourceType {
  EXOGENOUS = 'Exógeno (solo fuentes externas)',
  ENDOGENOUS = 'Endógeno (sintetizado internamente)',
  PARTIAL_SYNTHESIS = 'Síntesis parcial (precursor requerido)',
  MICROBIOTA = 'Sintetizado por microbiota intestinal',
  DUAL_SOURCE = 'Fuente dual (sintetizado y dietético)',
  CONDITIONAL_SYNTHESIS = 'Síntesis condicional (limitada por factores)',
  STORAGE_DEPENDENT = 'Dependiente de reservas corporales',
  SYNTHETIC = 'Sintético (suplementos)',
}

export enum BioactiveType {
  RETINOID = 'Retinoide',
  CAROTENOID = 'Carotenoide',
  TOCOPHEROL = 'Tocoferol',
  TOCOTRIENOL = 'Tocotrienol',
  NAPHTHOQUINONE = 'Naftoquinona',
  SECOSTEROID = 'Secosteroide',
  FLAVIN = 'Flavina',
  NICOTINAMIDE = 'Nicotinamida',
  PYRIDOXINE = 'Piridoxina',
  COBALAMIN = 'Cobalamina',
  ASCORBATE = 'Ascorbato',
  THIAMINE = 'Tiamina',
  FOLATE = 'Folato',
  PANTOTHENATE = 'Pantotenato',
  BIOTIN = 'Biotina',
  CHOLINE = 'Colina',
  ESSENTIAL_MINERAL = 'Mineral esencial',
  TRACE_ELEMENT = 'Oligoelemento',
  BIOFLAVONOID = 'Bioflavonoide',
  POLYPHENOL = 'Polifenol',
  ORGANOSULFUR = 'Organoazufrado',
  XANTHOPHYLL = 'Xantofila',
  QUINONE = 'Quinona',
  BETAINE = 'Betaína',
  PHOSPHOLIPID = 'Fosfolípido',
  AMINO_ACID_DERIVATIVE = 'Derivado de aminoácido',
  TERPENOID = 'Terpenoide',
  ALKALOID = 'Alcaloide',
  GLUCOSINOLATE = 'Glucosinolato',
  PHYTOSTEROL = 'Fitoesterol',
  PROBIOTIC_STRAIN = 'Cepa probiótica',
  PREBIOTIC = 'Prebiótico',
}

export class MicronutrientDto {
  id: string;
  name: string;
  description?: string;
  type: TypeMicronutrient;
  unit: string;
  dailyRecommendation?: string;
  tolerableLimit?: string;
  solubility: SolubilityType;
  function: FunctionType[];
  essentiality: EssentialityType;
  source: SourceType;
  bioactiveType: BioactiveType;
  createdAt: Date;
  updatedAt: Date;
}
