import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [StudentsService],
  exports: [StudentsService]
})
export class StudentsModule {}
