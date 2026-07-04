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
import { ChargeTypesService } from './charge-types.service.js';
import { CreateChargeTypeDto } from './dto/create-charge-type.dto.js';
import { UpdateChargeTypeDto } from './dto/update-charge-type.dto.js';

@Controller('charge-types')
export class ChargeTypesController {
  constructor(private readonly chargeTypesService: ChargeTypesService) {}

  @Post()
  create(@Body() dto: CreateChargeTypeDto) {
    return this.chargeTypesService.create(dto);
  }

  @Get()
  findAll() {
    return this.chargeTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.chargeTypesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateChargeTypeDto,
  ) {
    return this.chargeTypesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.chargeTypesService.remove(id);
  }
}
