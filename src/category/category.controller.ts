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
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.client.send('createCategory', createCategoryDto).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get()
  findAll() {
    return this.client.send('findAllCategory', {}).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send('findOneCategory', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }

  @Patch(':id')
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
  remove(@Param('id') id: string) {
    return this.client.send('removeCategory', id).pipe(
      catchError((e) => {
        throw new RpcException(e);
      }),
    );
  }
}
