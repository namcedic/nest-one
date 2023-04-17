import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findOneByUserName(userName: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        userName,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.userName = createUserDto.userName;
    const saltOrRounds = 10;
    const passhass = await bcrypt.hash(createUserDto.password, saltOrRounds);
    user.password = passhass;
    user.lastName = createUserDto.lastName;
    user.isActive = createUserDto.isActive;
    user.roles = createUserDto.roles;
    return await this.usersRepository.save(user);
  }

  async update(id, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({
      id: id,
    });
    if (!user) {
      throw new NotFoundException(`Resource with ID ${id} not found`);
    }
    user.email = updateUserDto.email;
    user.firstName = updateUserDto.firstName;
    user.userName = updateUserDto.userName;
    user.password = updateUserDto.password;
    user.lastName = updateUserDto.lastName;
    user.roles = updateUserDto.roles;
    user.isActive = updateUserDto.isActive;
    return await this.usersRepository.save(user);
  }
}
