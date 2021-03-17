import { EntityRepository, Repository } from "typeorm";
import { EmployeeSignUpDto } from "./dto/employee-signUp.dto";
import { EmployeeSignInDto } from "./dto/employee-signIn.dto";
import { Employee } from "./employee.entity";

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee>{
    async signUpEmployee(EmployeeSignUpDto:EmployeeSignUpDto):Promise<Object>{
        const { name, lastname, phone, password } = EmployeeSignUpDto;
        const employee = new Employee();
        employee.name = name;
        employee.lastname = lastname;
        employee.phone = phone
        employee.password = password;
        await employee.save();
        return{
            id_employee: employee.id_employee,
            name: name,
            lastname: lastname,
            phone: phone
        }
    }

    async signInEmployee(EmployeeSignInDto:EmployeeSignInDto){
        const { id, password } = EmployeeSignInDto;
        console.log(EmployeeSignInDto);
        const findEmployee = await this.findOne({
            id_employee: parseInt(id),
            password: password
        });
        console.log(findEmployee);
        return findEmployee;
    }
}