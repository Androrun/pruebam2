import { CreateReptileDto } from './dto/create-reptile.dto';
import { UpdateReptileDto } from './dto/update-reptile.dto';
export declare class ReptilesService {
    create(createReptileDto: CreateReptileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReptileDto: UpdateReptileDto): string;
    remove(id: number): string;
}
