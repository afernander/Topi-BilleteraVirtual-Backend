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
  UseGuards,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { BillDto } from './dtos/bill.dto';
import { BillService } from './bill.service';
import { CreateBillDto, UpdateBillDto } from './dtos/create-bill.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('bill')
@Serialize(BillDto)

export class BillController {
  constructor(private billService: BillService) {}

  @Post()
  createNewbill(@Body() body: CreateBillDto) {
    this.billService.create(body);
  }

  @Get('/:id')
  async findbill(@Param('id', ParseIntPipe) id: number) {
    //console.log('handler is running');
    const bill = await this.billService.findOne(id);
    if (!bill) {
      throw new NotFoundException('bill not found');
    }
    return bill;
  }

  @Get()
  findAllbills() {
    return this.billService.findAll();
  }

  @Put('/:id')
  updatebill(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateBillDto,
  ) {
    return this.billService.update(id, body);
  }

  @Delete('/:id')
  removebill(@Param('id', ParseIntPipe) id: number) {
    return this.billService.remove(id);
  }
}
