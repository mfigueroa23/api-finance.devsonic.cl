import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module.js';
import { PrismaService } from './prisma/prisma.service.js';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prisma = app.get(PrismaService);
  const domains = await prisma.cors_domains.findMany({
    select: { domain: true },
    where: { habilitated: true },
  });

  if (domains.length !== 0) {
    domains.forEach(({ domain }) =>
      logger.log(`CORS enabled for domain: ${domain}`),
    );
    app.enableCors({
      origin: domains.map(({ domain }) => domain),
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    });
  } else {
    logger.warn(
      'No CORS domains enabled in the database; blocking all cross-origin requests',
    );
    app.enableCors({ origin: false });
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  logger.error(
    `Error during application bootstrap: ${err instanceof Error ? err.message : err}`,
  );
  process.exit(1);
});
