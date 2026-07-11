import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service.js';
import express from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getServiceStatus(@Res() res: express.Response): Promise<void> {
    try {
      const serviceName = await this.appService.getProperty('SERVICE_NAME');
      const serviceStatus =
        await this.appService.getProperty('SERVICE_STATUS');
      res.status(200).json({
        serviceName: serviceName.value,
        serviceStatus: serviceStatus.value,
      });
    } catch (err) {
      res.status(500).json({
        serviceName: 'unknown',
        serviceStatus: 'unknown',
        error: `${err}`,
      });
    }
  }
}
