import { Module } from '@nestjs/common';
import { AccountTypesController } from './account-types.controller.js';
import { AccountTypesService } from './account-types.service.js';

@Module({
  controllers: [AccountTypesController],
  providers: [AccountTypesService],
})
export class AccountTypesModule {}
