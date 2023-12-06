import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/baseDto/base.dto';

export class CatDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  name: string;

  @Expose()
  age: number;

  @Expose()
  @Transform(({ obj }) => obj.name + ' ' + obj.breed)
  // full name = name + breed
  fullName: string;

  @Expose()
  breed: string;
}
