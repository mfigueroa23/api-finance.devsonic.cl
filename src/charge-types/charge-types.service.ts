import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateChargeTypeDto } from './dto/create-charge-type.dto.js';
import { UpdateChargeTypeDto } from './dto/update-charge-type.dto.js';

@Injectable()
export class ChargeTypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateChargeTypeDto) {
    return this.prisma.charge_type.create({ data: dto });
  }

  findAll() {
    return this.prisma.charge_type.findMany();
  }

  findOne(id: number) {
    return this.prisma.charge_type.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, dto: UpdateChargeTypeDto) {
    return this.prisma.charge_type.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.charge_type.delete({ where: { id } });
  }
}
