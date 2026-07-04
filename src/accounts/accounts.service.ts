import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAccountDto } from './dto/create-account.dto.js';
import { UpdateAccountDto } from './dto/update-account.dto.js';

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAccountDto) {
    return this.prisma.account.create({ data: dto });
  }

  findAll() {
    return this.prisma.account.findMany();
  }

  findOne(id: number) {
    return this.prisma.account.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, dto: UpdateAccountDto) {
    return this.prisma.account.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.account.delete({ where: { id } });
  }
}
