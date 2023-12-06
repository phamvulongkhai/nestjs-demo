import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { StoreConfig } from 'src/store/store.config';
import { CatsUseFactoryService } from './cats-use-factory.service';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    @Inject('STORE_CONFIG') readonly storeConfig: StoreConfig,
    @Inject('CAT_USE_FACTORY_SERVICE')
    private catsUseFactoryService: CatsUseFactoryService,
  ) {
    console.log('storeConfig in useValue :>> ', storeConfig);
  }

  @Get('findAll')
  async findAll(): Promise<Cat[]> {
    this.catsUseFactoryService.save('Hello from cat useFactory service');
    try {
      return await this.catsService.findAll();
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  @Post('create')
  async create(@Body() cat: CatDto): Promise<CatDto> {
    cat.id = '1';
    cat.createdAt = new Date();
    cat.updatedAt = new Date();
    cat.deletedAt = new Date();

    return CatDto.plainToInstance(cat);
  }
}
