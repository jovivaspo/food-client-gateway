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
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/config';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.client.send('createBrand', createBrandDto).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get()
  findAll() {
    return this.client.send('findAllBrand', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send('findOneBrand', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.client.send('updateBrand', { id, ...updateBrandDto }).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send('removeBrand', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }
}
