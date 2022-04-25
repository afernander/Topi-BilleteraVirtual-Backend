import {
  Param,
  NotFoundException,
  Controller,
  Get,
  Delete,
  Patch,
  Put,
  Post,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ParentsDto } from './dtos/parents.dto';
import { ParentsService } from './parents.service';
import { CreateParentsDto, UpdateParentsDto } from './dtos/create-parents.dto';

@Controller('parents')
@Serialize(ParentsDto)
export class ParentsController {
  constructor(private parentsService: ParentsService) {}

  @Post()
  createNewparents(@Body() body: CreateParentsDto) {
    this.parentsService.create(body);
  }

  @Get('/:id')
  async findparents(@Param('id', ParseIntPipe) id: number) {
    //console.log('handler is running');
    const parents = await this.parentsService.findOne(id);
    if (!parents) {
      throw new NotFoundException('parents not found');
    }
    return parents;
  }

  @Get()
  findAllparents() {
    return this.parentsService.findAll();
  }

  @Put('/:id')
  updateparents(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateParentsDto,
  ) {
    return this.parentsService.update(id, body);
  }

  @Delete('/:id')
  removeparents(@Param('id', ParseIntPipe) id: number) {
    return this.parentsService.remove(id);
  }
}
