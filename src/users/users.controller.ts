import {
  Param,
  NotFoundException,
  Controller,
  Get,
  Delete,
  Patch,
  Post,
  Body,
  Query,
  Put,
  ParseIntPipe,
  Session,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { SinginDto } from './dtos/singin.dto';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { UpdateUserDto } from './dtos/create-user.dto';
import { AuthService } from 'src/users/auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { Users } from './users.entity';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('/whoiam')
  whoAmI(@CurrentUser() user: Users) {
    console.log('Consulted User with id', user.id);
    return user;
  }

  @Post('/signout')
  singOut() {
    console.log('Cerro sesion');
  }

  @Post('/signup')
  async createNewUser(@Body() body: CreateUserDto) {
    const user = await this.authService.singup(
      body.email,
      body.password,
      body.name,
      body.date,
    );

    return user;
  }

  @Post('/signin')
  async singin(@Body() body: SinginDto) {
    const user = await this.authService.signin(body.email, body.password);

    console.log('User with id', user.id);
    return user;
  }

  @Get('/:id')
  async findUser(@Param('id', ParseIntPipe) id: number) {
    //console.log('handler is running');
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Get()
  findAllUsersEmail(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Get('/all')
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    return this.usersService.update(id, body);
  }

  @Delete('/:id')
  removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
