import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(createUserDto: Prisma.UserCreateInput): Promise<User>;
    update(id: number, updateUserDto: Prisma.UserUpdateInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    remove(id: number): Promise<User>;
}
