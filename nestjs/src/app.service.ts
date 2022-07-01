import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { value: string } {
    return { value: 'Hello World!' };
  }
}
