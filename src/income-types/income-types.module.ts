import { Module } from '@nestjs/common';
import { IncomeTypesController } from './income-types.controller.js';
import { IncomeTypesService } from './income-types.service.js';

@Module({
  controllers: [IncomeTypesController],
  providers: [IncomeTypesService],
})
export class IncomeTypesModule {}
