import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsUseFactoryService {
  save(data: any): void {
    console.log(data);
  }
}
