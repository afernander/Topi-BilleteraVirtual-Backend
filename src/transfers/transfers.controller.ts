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
  UseGuards
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { TransferDto } from './dtos/transfer.dto';
import { TransfersService } from './transfers.service';
import {
  CreateTransferDto,
  UpdateTransferDto,
} from './dtos/create-transfer.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('transfers')
@Serialize(TransferDto)

export class TransfersController {
  constructor(private transfersService: TransfersService) {}

  @Post()
  createNewtransfer(@Body() body: CreateTransferDto) {
    this.transfersService.create(body);
  }

  @Get('/:id')
  async findtransfer(@Param('id', ParseIntPipe) id: number) {
    //console.log('handler is running');
    const transfer = await this.transfersService.findOne(id);
    if (!transfer) {
      throw new NotFoundException('transfer not found');
    }
    return transfer;
  }

  @Get()
  findAlltransfers() {
    return this.transfersService.findAll();
  }

  @Put('/:id')
  updatetransfer(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateTransferDto,
  ) {
    return this.transfersService.update(id, body);
  }

  @Delete('/:id')
  removetransfer(@Param('id', ParseIntPipe) id: number) {
    return this.transfersService.remove(id);
  }
}
