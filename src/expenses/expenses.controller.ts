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
import { ExpDto } from './dtos/exp.dto';
import { ExpensesService } from './expenses.service';
import { CreateExpDto, UpdateExpDto } from './dtos/create-Exp.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('expenses')
@Serialize(ExpDto)
export class ExpensesController {

    constructor(private expensesService: ExpensesService) {}

    @Post()
    createNewbill(@Body() body: CreateExpDto) {
      this.expensesService.create(body);
    }
  
    @Get('/:id')
    async findbill(@Param('id', ParseIntPipe) id: number) {
      //console.log('handler is running');
      const exp = await this.expensesService.findOne(id);
      if (!exp) {
        throw new NotFoundException('expense not found');
      }
      return exp;
    }
  
    @Get()
    findAllbills() {
      return this.expensesService.findAll();
    }
  
    @Put('/:id')
    updatebill(
      @Param('id', ParseIntPipe) id: number,
      @Body() body: UpdateExpDto,
    ) {
      return this.expensesService.update(id, body);
    }
  
    @Delete('/:id')
    removebill(@Param('id', ParseIntPipe) id: number) {
      return this.expensesService.remove(id);
    }
}
