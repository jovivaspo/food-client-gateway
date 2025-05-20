import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/config';
import { AdditiveDto } from './dto/additive.dto';

@ApiTags('Additive')
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
}
