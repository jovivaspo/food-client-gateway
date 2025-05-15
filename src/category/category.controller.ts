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
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully',
    type: CreateCategoryDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.client.send('createCategory', createCategoryDto).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Create multiple categories at once' })
  @ApiResponse({
    status: 201,
    description: 'Categories created successfully',
    type: [CreateCategoryDto],
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  createBulk(@Body() categories: CreateCategoryDto[]) {
    return this.client.send('createBulkCategory', categories).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: 200,
    description: 'List of all categories',
    type: [CreateCategoryDto],
  })
  findAll() {
    return this.client.send('findAllCategory', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a category by id' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({
    status: 200,
    description: 'Category found',
    type: CreateCategoryDto,
  })
  @ApiResponse({ status: 404, description: 'Category not found' })
  findOne(@Param('id') id: string) {
    return this.client.send('findOneCategory', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a category' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({
    status: 200,
    description: 'Category updated successfully',
    type: CreateCategoryDto,
  })
  @ApiResponse({ status: 404, description: 'Category not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.client
      .send('updateCategory', { id, ...updateCategoryDto })
      .pipe(
        catchError((e) => {
          throw new RpcException(e);
        }),
      );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a category' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({ status: 200, description: 'Category deleted successfully' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  remove(@Param('id') id: string) {
    return this.client.send('removeCategory', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Delete()
  @ApiOperation({ summary: 'Delete all categories' })
  @ApiResponse({
    status: 200,
    description: 'All categories deleted successfully',
  })
  removeAll() {
    return this.client.send('removeAllCategory', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }
}
