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
import { AccountTypesService } from './account-types.service.js';
import { CreateAccountTypeDto } from './dto/create-account-type.dto.js';
import { UpdateAccountTypeDto } from './dto/update-account-type.dto.js';

@Controller('account-types')
export class AccountTypesController {
  constructor(private readonly accountTypesService: AccountTypesService) {}

  @Post()
  create(@Body() dto: CreateAccountTypeDto) {
    return this.accountTypesService.create(dto);
  }

  @Get()
  findAll() {
    return this.accountTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.accountTypesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAccountTypeDto,
  ) {
    return this.accountTypesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.accountTypesService.remove(id);
  }
}
