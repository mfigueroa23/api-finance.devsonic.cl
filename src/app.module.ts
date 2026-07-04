import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AccountTypesModule } from './account-types/account-types.module.js';

@Module({
  imports: [PrismaModule, AccountTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
