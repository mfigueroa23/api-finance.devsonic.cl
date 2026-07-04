import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateIncomeTypeDto } from './dto/create-income-type.dto.js';
import { UpdateIncomeTypeDto } from './dto/update-income-type.dto.js';

@Injectable()
export class IncomeTypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateIncomeTypeDto) {
    return this.prisma.income_type.create({ data: dto });
  }

  findAll() {
    return this.prisma.income_type.findMany();
  }

  findOne(id: number) {
    return this.prisma.income_type.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, dto: UpdateIncomeTypeDto) {
    return this.prisma.income_type.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.income_type.delete({ where: { id } });
  }
}
