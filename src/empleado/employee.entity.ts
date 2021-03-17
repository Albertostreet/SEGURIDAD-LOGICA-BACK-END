/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['id_employee'])
export class Employee extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_employee: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    phone: string;

    @Column()
    password: string;
}