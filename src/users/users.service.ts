import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: 
    Repository<User>){

  }

  //testing multiple records
  // async createMultiple(createUserDto: CreateUserDto[]): Promise<User[]> {
  //   const user = this.UsersRepository.create(createUserDto); // Create multiple records
  //   return await this.UsersRepository.save(user); // Save multiple records at once
  // }

  async create(createUserDto: CreateUserDto) {
    const user = this.UsersRepository.create(createUserDto);

    return await this.UsersRepository.save(user);
  }

  async findAll() {
    return await this.UsersRepository.find();
  }

  async findOne(user_id: number) {
    return await this.UsersRepository.findOne({
      where: { user_id } });
  }

  async update(user_id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(user_id);
    if(!user){
      throw new NotFoundException();
    }

    Object.assign(user, updateUserDto);
    return await this.UsersRepository.save(user);
  }

  async remove(user_id: number) {
    const user = await this.findOne(user_id);
    if(!user){
      throw new NotFoundException();
    }
    return await this.UsersRepository.remove(user);
  }
}
