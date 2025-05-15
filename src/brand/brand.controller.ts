import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/config';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@ApiTags('Brands')
@Controller('brand')
export class BrandController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  @ApiOperation({ summary: 'Create a new brand' })
  @ApiResponse({
    status: 201,
    description: 'Brand created successfully',
    type: CreateBrandDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.client.send('createBrand', createBrandDto).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all brands' })
  @ApiResponse({
    status: 200,
    description: 'List of all brands',
    type: [CreateBrandDto],
  })
  findAll() {
    return this.client.send('findAllBrand', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a brand by id' })
  @ApiParam({ name: 'id', description: 'Brand ID' })
  @ApiResponse({
    status: 200,
    description: 'Brand found',
    type: CreateBrandDto,
  })
  @ApiResponse({ status: 404, description: 'Brand not found' })
  findOne(@Param('id') id: string) {
    return this.client.send('findOneBrand', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a brand' })
  @ApiParam({ name: 'id', description: 'Brand ID' })
  @ApiResponse({
    status: 200,
    description: 'Brand updated successfully',
    type: CreateBrandDto,
  })
  @ApiResponse({ status: 404, description: 'Brand not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.client.send('updateBrand', { id, ...updateBrandDto }).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a brand' })
  @ApiParam({ name: 'id', description: 'Brand ID' })
  @ApiResponse({ status: 200, description: 'Brand deleted successfully' })
  @ApiResponse({ status: 404, description: 'Brand not found' })
  remove(@Param('id') id: string) {
    return this.client.send('removeBrand', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }
}
