import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Users_Contracts } from '../typeorm/users_contracts.entity';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  createdAt: Date;
  @Column()
  validUntil: Date;
  @OneToMany(
    () => Users_Contracts,
    (users_contracts) => users_contracts.contract,
  )
  users_contracts: Users_Contracts[];
}
