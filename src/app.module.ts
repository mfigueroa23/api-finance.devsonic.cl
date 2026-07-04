import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AccountTypesModule } from './account-types/account-types.module.js';
import { AccountsModule } from './accounts/accounts.module.js';
import { IncomeTypesModule } from './income-types/income-types.module.js';
import { IncomeModule } from './income/income.module.js';

@Module({
  imports: [
    PrismaModule,
    AccountTypesModule,
    AccountsModule,
    IncomeTypesModule,
    IncomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
