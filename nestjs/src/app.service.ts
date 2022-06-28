import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { data: { value: string } } {
    return { data: { value: 'Hello World!' } };
  }
}
