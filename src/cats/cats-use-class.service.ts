import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsUseClassService {
  findAll() {
    return 'hello from cat useClass service';
  }
}
