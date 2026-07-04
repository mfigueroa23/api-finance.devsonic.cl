import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { IncomeService } from './income.service.js';
import { CreateIncomeDto } from './dto/create-income.dto.js';
import { UpdateIncomeDto } from './dto/update-income.dto.js';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  create(@Body() dto: CreateIncomeDto) {
    return this.incomeService.create(dto);
  }

  @Get()
  findAll() {
    return this.incomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.incomeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateIncomeDto) {
    return this.incomeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.incomeService.remove(id);
  }
}
