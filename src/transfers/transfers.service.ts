import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTransferDto } from './dto/create-transfer.dto.js';
import { UpdateTransferDto } from './dto/update-transfer.dto.js';

@Injectable()
export class TransfersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTransferDto) {
    return this.prisma.$transaction(async (tx) => {
      const transfer = await tx.transfer.create({
        data: { ...dto, date: new Date(dto.date) },
      });
      await tx.account.update({
        where: { id: dto.from_account_id },
        data: { total_amount: { decrement: dto.amount } },
      });
      await tx.account.update({
        where: { id: dto.to_account_id },
        data: { total_amount: { increment: dto.amount } },
      });
      return transfer;
    });
  }

  findAll() {
    return this.prisma.transfer.findMany();
  }

  findOne(id: number) {
    return this.prisma.transfer.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, dto: UpdateTransferDto) {
    return this.prisma.transfer.update({
      where: { id },
      data: { ...dto, date: dto.date ? new Date(dto.date) : undefined },
    });
  }

  remove(id: number) {
    return this.prisma.transfer.delete({ where: { id } });
  }
}
