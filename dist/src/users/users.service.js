"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async findOne(id) {
        return await this.usersRepository.findOne({
            where: {
                id,
            },
        });
    }
    async findOneByUserName(userName) {
        return await this.usersRepository.findOne({
            where: {
                userName,
            },
        });
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
    async create(createUserDto) {
        const user = new user_entity_1.User();
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
    async update(id, updateUserDto) {
        const user = await this.usersRepository.findOneBy({
            id: id,
        });
        if (!user) {
            throw new common_1.NotFoundException(`Resource with ID ${id} not found`);
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
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map