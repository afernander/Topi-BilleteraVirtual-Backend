import { Module } from '@nestjs/common';
import { ParentsService } from './parents.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [ParentsService],
  exports:[ParentsService]
})
export class ParentsModule {}
