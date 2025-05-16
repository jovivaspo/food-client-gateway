import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/config';
import { MicronutrientDto } from './dto/micronutrient.dto';

@ApiTags('Micronutrients')
@Controller('micronutrient')
export class MicronutrientController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Get()
  @ApiOperation({ summary: 'Get all micronutrients' })
  @ApiResponse({
    status: 200,
    description: 'List of all micronutrients',
    type: [MicronutrientDto],
  })
  findAll() {
    return this.client.send('findAllMicronutrient', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a micronutrient by id' })
  @ApiParam({ name: 'id', description: 'Micronutrient ID' })
  @ApiResponse({
    status: 200,
    description: 'Micronutrient found',
    type: MicronutrientDto,
  })
  @ApiResponse({ status: 404, description: 'Micronutrient not found' })
  findOne(@Param('id') id: string) {
    return this.client.send('findOneMicronutrient', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }
}
