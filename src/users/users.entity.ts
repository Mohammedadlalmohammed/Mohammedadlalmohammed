import { Property } from "../properties/properties.entity";
import { Users_Contracts } from "../typeorm/users_contracts.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type : 'bigint'})
    id : number;
    @Column({unique : true})
    email : string;
    @Column({length : 100})
    password : string;
    @OneToMany(()=>Users_Contracts, (users_contracts)=>users_contracts.user)
    users_contracts ?: Users_Contracts[];
    @OneToMany(()=>Property, (property)=>property.user)
    properties : Property[];
}