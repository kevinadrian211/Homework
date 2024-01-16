import { Body, Controller,Delete,Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateCatDTO } from './dto/create-cat.dto';
import { UpdateCatDTO } from './dto/update-cat.tdo';
import { CatsService } from './cats.service';
import { Cat } from './interface/cats.interface';

@Controller('cats')
export class CatsController {
    constructor( private catsService: CatsService)  {}

    @Get()
    async findAll(): Promise<Cat[]> {

        return this.catsService.findAll();
    }

@Get(':id')
findOne(@Param() id: string): string    {
    console.log(id);
    return `This action returns a cat number #${id}`;
}

@Post()

async create(@Body() createCatDto: CreateCatDTO) {
    this.catsService.create(createCatDto);
}

@Put(':id')

async update(@Param('id') id:number,@Body() updateCatDto: UpdateCatDTO): Promise<string> {
return `This action update this cat whit number #${id}`;

}

@Patch(':id')
async patchCats(@Param('id') id: number, @Body() updateCatDto: UpdateCatDTO): Promise<string>{
    return `This action recover data of cat number #${id}`;
}


@Delete(':id')
async remove(@Param('id') id: number): Promise<string> {

    return `This action eliminate the cat number #${id}`;
 
}


}