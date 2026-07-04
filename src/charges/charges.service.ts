import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateChargeDto } from './dto/create-charge.dto.js';
import { UpdateChargeDto } from './dto/update-charge.dto.js';

@Injectable()
export class ChargesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateChargeDto) {
    return this.prisma.$transaction(async (tx) => {
      const charge = await tx.charges.create({
        data: { ...dto, date: new Date(dto.date) },
      });
      await tx.account.update({
        where: { id: dto.account_id },
        data: { total_amount: { decrement: dto.amount } },
      });
      return charge;
    });
  }

  findAll() {
    return this.prisma.charges.findMany();
  }

  findOne(id: number) {
    return this.prisma.charges.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, dto: UpdateChargeDto) {
    return this.prisma.charges.update({
      where: { id },
      data: { ...dto, date: dto.date ? new Date(dto.date) : undefined },
    });
  }

  remove(id: number) {
    return this.prisma.charges.delete({ where: { id } });
  }
}
