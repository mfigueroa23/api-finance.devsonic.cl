import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';
import { property } from '../generated/prisma/client.js';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getProperty(key: string): Promise<property> {
    return this.prisma.property.findUniqueOrThrow({ where: { key } });
  }
}
