import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome(): string {
    return 'Bem-vindo à minha API NestJS!';
  }

  @Get('dados')
  getDados() {
    return { nome: 'API NestJS', versao: '1.0' };
  }
}