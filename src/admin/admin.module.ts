import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule {}
