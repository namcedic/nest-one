import { CreateCatDto } from '../../cats/dto/create-cat.dto';
declare const UpdateCatDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCatDto>>;
export declare class UpdateCatDto extends UpdateCatDto_base {
}
export {};
