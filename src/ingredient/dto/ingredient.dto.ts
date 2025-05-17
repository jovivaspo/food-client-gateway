import { ApiProperty } from '@nestjs/swagger';
import { CreateIngredientDto } from './create-ingredient.dto';

export class IngredientDto extends CreateIngredientDto {
  @ApiProperty({
    description: 'The unique identifier of the ingredient',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2025-05-17T17:07:30.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2025-05-17T17:07:30.000Z',
  })
  updatedAt: Date;
}
