import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';

@Controller('numbers')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Post()
  create(@Body() createNumberDto: CreateNumberDto) {
    return this.numbersService.create(createNumberDto);
  }

  @Get()
  findAll() {
    return this.numbersService.findAll();
  }

  @Get(':number_id')
  findOne(@Param('number_id') number_id: string) {
    return this.numbersService.findOne(+number_id);
  }

  @Patch(':number_id')
  update(
    @Param('number_id') number_id: string,
    @Body() updateNumberDto: UpdateNumberDto,
  ) {
    return this.numbersService.update(+number_id, updateNumberDto);
  }

  @Delete(':number_id')
  remove(@Param('number_id') number_id: string) {
    return this.numbersService.remove(+number_id);
  }
}
