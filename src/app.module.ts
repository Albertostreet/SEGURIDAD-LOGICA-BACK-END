import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configuration/typeorm.config';
import { EmployeeModule } from './empleado/employee.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(typeOrmConfig),
      EmployeeModule,
  ],
})
export class AppModule {}
