import { Expose, plainToInstance } from 'class-transformer';

export abstract class BaseDto {
  @Expose()
  id: string;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
  @Expose()
  deletedAt: Date;

  static plainToInstance<T>(
    this: new (...args: any[]) => T,
    plain: T,
  ): T | undefined {
    return plainToInstance(this, plain, { excludeExtraneousValues: true }) as T;
  }
}
