import { ReptilesService } from './reptiles.service';
import { CreateReptileDto } from './dto/create-reptile.dto';
import { UpdateReptileDto } from './dto/update-reptile.dto';
export declare class ReptilesController {
    private readonly reptilesService;
    constructor(reptilesService: ReptilesService);
    create(createReptileDto: CreateReptileDto): string[];
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReptileDto: UpdateReptileDto): string;
    remove(id: string): string;
}
