import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAccountTypeDto } from './dto/create-account-type.dto.js';
import { UpdateAccountTypeDto } from './dto/update-account-type.dto.js';

@Injectable()
export class AccountTypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAccountTypeDto) {
    return this.prisma.account_type.create({ data: dto });
  }

  findAll() {
    return this.prisma.account_type.findMany();
  }

  findOne(id: number) {
    return this.prisma.account_type.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, dto: UpdateAccountTypeDto) {
    return this.prisma.account_type.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.account_type.delete({ where: { id } });
  }
}
