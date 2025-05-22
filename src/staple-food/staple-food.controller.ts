import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/config';
import { CreateStapleFoodDto } from './dto/create-staple-food.dto';
import { StapleFoodDto } from './dto/staple-food';

@ApiTags('Staple Foods')
@Controller('staple-food')
export class StapleFoodController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Get()
  @ApiOperation({ summary: 'Get all staple foods' })
  @ApiResponse({
    status: 200,
    description: 'List of all staple foods',
    type: [StapleFoodDto],
  })
  findAll() {
    return this.client.send('findAllStapleFood', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a staple food by id' })
  @ApiParam({ name: 'id', description: 'Staple food ID' })
  @ApiResponse({
    status: 200,
    description: 'Staple food found',
    type: StapleFoodDto,
  })
  @ApiResponse({ status: 404, description: 'Staple food not found' })
  findOne(@Param('id') id: string) {
    return this.client.send('findOneStapleFood', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Post()
  @ApiOperation({ summary: 'Create a new staple food' })
  @ApiResponse({
    status: 201,
    description: 'Staple food created successfully',
    type: StapleFoodDto,
  })
  create(@Body() createStapleFoodDto: CreateStapleFoodDto) {
    return this.client.send('createStapleFood', createStapleFoodDto).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an staple food by id' })
  @ApiParam({ name: 'id', description: 'Staple food ID' })
  @ApiResponse({
    status: 200,
    description: 'Staple food deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Staple food not found' })
  remove(@Param('id') id: string) {
    return this.client.send('removeStapleFood', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }
}
