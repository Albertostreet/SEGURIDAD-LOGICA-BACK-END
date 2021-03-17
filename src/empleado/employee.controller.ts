import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeSignInDto } from './dto/employee-signIn.dto';
import { EmployeeSignUpDto } from './dto/employee-signUp.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(
        private EmployeeService:EmployeeService,
    ){}

    @Post('/signUp')
    signUpEmployee(@Body() EmployeeSignUpDto:EmployeeSignUpDto){
        return this.EmployeeService.signUpEmployee(EmployeeSignUpDto);
    }

    @Post('/signIn')
    signInEmployee(@Body() EmployeeSignInDto:EmployeeSignInDto){
        return this.EmployeeService.signInEmployee(EmployeeSignInDto);
    }
}
