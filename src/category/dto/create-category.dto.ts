import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'The name of the category',
    example: 'Bebidas',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'A description of what products belong in this category',
    example: 'Agua, zumos naturales, bebidas vegetales, refrescos, etc.',
    required: false,
  })
  @IsString()
  @IsOptional()
  description: string;
}
