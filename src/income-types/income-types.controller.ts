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
import { IncomeTypesService } from './income-types.service.js';
import { CreateIncomeTypeDto } from './dto/create-income-type.dto.js';
import { UpdateIncomeTypeDto } from './dto/update-income-type.dto.js';

@Controller('income-types')
export class IncomeTypesController {
  constructor(private readonly incomeTypesService: IncomeTypesService) {}

  @Post()
  create(@Body() dto: CreateIncomeTypeDto) {
    return this.incomeTypesService.create(dto);
  }

  @Get()
  findAll() {
    return this.incomeTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.incomeTypesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateIncomeTypeDto,
  ) {
    return this.incomeTypesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.incomeTypesService.remove(id);
  }
}
