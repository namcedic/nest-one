import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from '../../cats/dto/create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {}