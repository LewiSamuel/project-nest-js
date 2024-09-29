import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  
  const config = new DocumentBuilder()
    .setTitle('Project Example')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  console.log("🌐- - - - - - - - - - - - - - - - - - - - - - - - - -🌐")
  console.log("| ");
  console.log('|  Project Example - API ❤️');
  console.log('|  💻 API running at http://localhost:3000/swagger');
  console.log("| ");
  console.log("🌐- - - - - - - - - - - - - - - - - - - - - - - - - -🌐")

  await app.listen(3000);
}
bootstrap();
