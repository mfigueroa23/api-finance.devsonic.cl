import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateIncomeDto } from './dto/create-income.dto.js';
import { UpdateIncomeDto } from './dto/update-income.dto.js';

@Injectable()
export class IncomeService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateIncomeDto) {
    return this.prisma.$transaction(async (tx) => {
      const income = await tx.income.create({
        data: { ...dto, date: new Date(dto.date) },
      });
      await tx.account.update({
        where: { id: dto.account_id },
        data: { total_amount: { increment: dto.amount } },
      });
      return income;
    });
  }

  findAll() {
    return this.prisma.income.findMany();
  }

  findOne(id: number) {
    return this.prisma.income.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, dto: UpdateIncomeDto) {
    return this.prisma.income.update({
      where: { id },
      data: { ...dto, date: dto.date ? new Date(dto.date) : undefined },
    });
  }

  remove(id: number) {
    return this.prisma.income.delete({ where: { id } });
  }
}
