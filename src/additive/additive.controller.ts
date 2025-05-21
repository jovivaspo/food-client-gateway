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
import { AdditiveDto } from './dto/additive.dto';
import { CreateAdditiveDto } from './dto/create-additive.dto';

@ApiTags('Additives')
@Controller('additive')
export class AdditiveController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Get()
  @ApiOperation({ summary: 'Get all additives' })
  @ApiResponse({
    status: 200,
    description: 'List of all additives',
    type: [AdditiveDto],
  })
  findAll() {
    return this.client.send('findAllAdditive', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a additive by id' })
  @ApiParam({ name: 'id', description: 'Additive ID' })
  @ApiResponse({
    status: 200,
    description: 'Additive found',
    type: AdditiveDto,
  })
  @ApiResponse({ status: 404, description: 'Additive not found' })
  findOne(@Param('id') id: string) {
    return this.client.send('findOneAdditive', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Post()
  @ApiOperation({ summary: 'Create a new additive' })
  @ApiResponse({
    status: 201,
    description: 'Additive created successfully',
    type: AdditiveDto,
  })
  create(@Body() createAdditiveDto: CreateAdditiveDto) {
    return this.client.send('createAdditive', createAdditiveDto).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an additive by id' })
  @ApiParam({ name: 'id', description: 'Additive ID' })
  @ApiResponse({
    status: 200,
    description: 'Additive deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Additive not found' })
  remove(@Param('id') id: string) {
    return this.client.send('removeAdditive', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }
}
