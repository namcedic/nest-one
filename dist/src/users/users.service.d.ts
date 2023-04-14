import { User } from 'src/users/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByUserName(userName: string): Promise<User>;
    remove(id: number): Promise<void>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
