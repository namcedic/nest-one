// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Role } from './role.enum';
// import { Address } from './address.interface';
//
// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column()
//   email: string;
//
//   @Column()
//   userName: string;
//
//   @Column()
//   firstName: string;
//
//   @Column()
//   lastName: string;
//
//   @Column({ default: true })
//   isActive: boolean;
//
//   @Column()
//   password: string;
//
//   @Column({
//     type: 'jsonb',
//   })
//   addresses: Address;
//
//   @Column({
//     type: 'enum',
//     enum: Role,
//     array: true,
//     default: [Role.User],
//   })
//   roles: Role[];
// }
