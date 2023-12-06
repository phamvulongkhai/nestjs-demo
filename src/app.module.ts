import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  // consumer
  //   .apply(Logger)
  //   .exclude({ path: 'cats', method: RequestMethod.GET })
  //   .forRoutes(CatsController);
  // }
}
