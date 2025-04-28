import { User } from "src/users/users.entity";
import { Users_Contracts } from "../typeorm/users_contracts.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Property {
    @PrimaryGeneratedColumn({type : 'bigint'})
    id : number;
    @ManyToOne(()=>User, (user)=>user.properties)
    user : User;
    @Column({length : 100})
    location : string;
    @ManyToMany(()=>Users_Contracts, (users_contracts)=>users_contracts.properties)
    users_contracts : Users_Contracts[];
    
}