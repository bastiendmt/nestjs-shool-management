import { Module } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentResolver } from './stuedent.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService, StudentResolver],
})
export class StudentModule {}
