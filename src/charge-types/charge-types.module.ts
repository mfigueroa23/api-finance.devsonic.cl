import { Module } from '@nestjs/common';
import { ChargeTypesController } from './charge-types.controller.js';
import { ChargeTypesService } from './charge-types.service.js';

@Module({
  controllers: [ChargeTypesController],
  providers: [ChargeTypesService],
})
export class ChargeTypesModule {}
