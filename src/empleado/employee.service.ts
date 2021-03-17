import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeSignUpDto } from './dto/employee-signUp.dto';
import { EmployeeSignInDto } from './dto/employee-signIn.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeRepository)
        private EmployeeRepository:EmployeeRepository,
    ){}

    async signUpEmployee(EmployeeSignUpDto:EmployeeSignUpDto){
        return this.EmployeeRepository.signUpEmployee(EmployeeSignUpDto);
    }

    async signInEmployee(EmployeeSignInDto:EmployeeSignInDto){
        return this.EmployeeRepository.signInEmployee(EmployeeSignInDto);
    }
}
