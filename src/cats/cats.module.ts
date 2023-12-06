import { Module } from '@nestjs/common';
import { StoreConfig } from './../store/store.config';
import { CatsUseClassService } from './cats-use-class.service';
import { CatsUseFactoryService } from './cats-use-factory.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],

  providers: [
    {
      // It provides service but use different service
      provide: CatsService,
      useClass: CatsUseClassService,
    },
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'abc',
        path: 'def',
      } as StoreConfig,
    },
    {
      provide: 'CAT_USE_FACTORY_SERVICE',
      useFactory: (storeConfig: StoreConfig, catsService: CatsService) => {
        console.log('do some logic in Factory function :>> ', storeConfig);
        console.log(
          'do some logic in Factory function :>> ',
          catsService.findAll(),
        );
        return new CatsUseFactoryService();
      },
      inject: [
        // inject storeCongfig service
        {
          token: 'STORE_CONFIG',
          optional: true,
        },
        // inject different service into factory function to do some logical
        CatsService,
      ],
    },
  ],
})
export class CatsModule {}
