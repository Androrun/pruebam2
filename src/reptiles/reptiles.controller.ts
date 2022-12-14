import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReptilesService } from './reptiles.service';
import { CreateReptileDto } from './dto/create-reptile.dto';
import { UpdateReptileDto } from './dto/update-reptile.dto';

@Controller('reptiles')
export class ReptilesController {
  constructor(private readonly reptilesService: ReptilesService) {}

  @Post()
  create(@Body() createReptileDto: CreateReptileDto) {
    return [this.reptilesService.create(createReptileDto)];
  }

  @Get()
  findAll() {
    return this.reptilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reptilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReptileDto: UpdateReptileDto) {
    return this.reptilesService.update(+id, updateReptileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reptilesService.remove(+id);
  }
}
