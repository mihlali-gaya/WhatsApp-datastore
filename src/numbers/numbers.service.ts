import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Number } from './entities/number.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NumbersService {
  constructor(
    @InjectRepository(Number) 
    private readonly NumbersRepository: 
    Repository<Number>){

  }

  async create(createNumberDto: CreateNumberDto) {
    const number = this.NumbersRepository.create(createNumberDto);
    return await this.NumbersRepository.save(number);
  }

  async findAll() {
    return await this.NumbersRepository.find();
  }

  async findOne(number_id: number) {
    return await this.NumbersRepository.findOne({
      where: { number_id } });
  }

  async update(number_id: number, updateNumberDto: UpdateNumberDto) {
    const number = await this.findOne(number_id);
    if(!number){
      throw new NotFoundException();
    }
    Object.assign(number, updateNumberDto)
    return await this.NumbersRepository.save(number);
  }

  async remove(number_id: number) {
    const number = await this.findOne(number_id);
    if(!number){
      throw new NotFoundException();
    }
    return await this.NumbersRepository.remove(number);
  }
}
