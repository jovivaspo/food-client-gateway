import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/config';
import {
  CreateIngredientDto,
  IngredientDto,
  UpdateIngredientDto,
} from './dto/ingredient.dto';

@ApiTags('Ingredients')
@Controller('ingredient')
export class IngredientController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ingredient' })
  @ApiResponse({
    status: 201,
    description: 'The ingredient has been successfully created',
    type: IngredientDto,
  })
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.client.send('createIngredient', createIngredientDto).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all ingredients' })
  @ApiResponse({
    status: 200,
    description: 'List of all ingredients',
    type: [IngredientDto],
  })
  findAll() {
    return this.client.send('findAllIngredients', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an ingredient by id' })
  @ApiParam({ name: 'id', description: 'Ingredient ID' })
  @ApiResponse({
    status: 200,
    description: 'Ingredient found',
    type: IngredientDto,
  })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  findOne(@Param('id') id: number) {
    return this.client.send('findOneIngredient', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an ingredient' })
  @ApiParam({ name: 'id', description: 'Ingredient ID' })
  @ApiResponse({
    status: 200,
    description: 'The ingredient has been successfully updated',
    type: IngredientDto,
  })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  update(
    @Param('id') id: number,
    @Body() updateIngredientDto: UpdateIngredientDto,
  ) {
    return this.client
      .send('updateIngredient', { ...updateIngredientDto, id })
      .pipe(
        catchError((e) => {
          throw new RpcException(e);
        }),
      );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an ingredient' })
  @ApiParam({ name: 'id', description: 'Ingredient ID' })
  @ApiResponse({
    status: 200,
    description: 'The ingredient has been successfully deleted',
    type: IngredientDto,
  })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  remove(@Param('id') id: number) {
    return this.client.send('removeIngredient', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }
}
