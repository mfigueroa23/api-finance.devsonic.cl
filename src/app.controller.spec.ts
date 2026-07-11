import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  const appServiceMock = {
    getProperty: jest.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: appServiceMock }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockResponse = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  describe('getServiceStatus', () => {
    it('should return 200 with the service name and status', async () => {
      appServiceMock.getProperty
        .mockResolvedValueOnce({ key: 'SERVICE_NAME', value: 'api-finance' })
        .mockResolvedValueOnce({ key: 'SERVICE_STATUS', value: 'running' });
      const res = mockResponse();

      await appController.getServiceStatus(res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        serviceName: 'api-finance',
        serviceStatus: 'running',
      });
    });

    it('should return 500 with unknown status when the properties cannot be retrieved', async () => {
      appServiceMock.getProperty.mockRejectedValueOnce(
        new Error('database unreachable'),
      );
      const res = mockResponse();

      await appController.getServiceStatus(res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          serviceName: 'unknown',
          serviceStatus: 'unknown',
        }),
      );
    });
  });
});
