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
import { SubDto } from './dtos/sub.dto';
import { SubsidiesService } from './subsidies.service';
import { CreateSubDto, UpdateSubDto } from './dtos/create-Sub.dto';

@Controller('subsidies')
@Serialize(SubDto)
export class SubsidiesController {
    constructor(private subsidiesService: SubsidiesService) {}

  @Post()
  createNewsub(@Body() body: CreateSubDto) {
    this.subsidiesService.create(body);
  }

  @Get('/:id')
  async findsub(@Param('id', ParseIntPipe) id: number) {
    //console.log('handler is running');
    const bill = await this.subsidiesService.findOne(id);
    if (!bill) {
      throw new NotFoundException('bill not found');
    }
    return bill;
  }

  @Get()
  findAllbills() {
    return this.subsidiesService.findAll();
  }

  @Put('/:id')
  updatebill(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateSubDto,
  ) {
    return this.subsidiesService.update(id, body);
  }

  @Delete('/:id')
  removebill(@Param('id', ParseIntPipe) id: number) {
    return this.subsidiesService.remove(id);
  }


}
