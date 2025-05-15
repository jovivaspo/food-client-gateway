import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({
    description: 'The name of the brand',
    example: 'Coca Cola',
  })
  @IsString()
  name: string;
}
