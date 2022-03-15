import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { StudentsModule } from 'src/students/students.module';
import { AdminModule } from 'src/admin/admin.module';
import { ParentsModule } from 'src/parents/parents.module';

@Module({
  imports: [StudentsModule, AdminModule, ParentsModule],
  providers: [UsersService]
})
export class UsersModule {}
