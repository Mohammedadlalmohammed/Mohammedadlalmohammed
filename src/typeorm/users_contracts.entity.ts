import { Property } from '../properties/properties.entity';
import { Contract } from '../contracts/contracts.entity';
import { User } from '../users/users.entity';
import { Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users_Contracts {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User)
  user: User;
  @ManyToOne(() => Contract)
  contract: Contract;
  @ManyToMany(()=>Property, (properties)=>properties.users_contracts)
  @JoinTable()
  properties : Property[];

}
