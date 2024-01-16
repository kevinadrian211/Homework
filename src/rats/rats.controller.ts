import { Body, Controller,Delete,Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateRatDTO } from './dto/create-rat.dto';
import { UpdateRatDTO } from './dto/update-rat.dto';

@Controller('rats')
export class RatsController {

@Get()
finAll(): string    {
    return `This action returns all Rats` ;
}

@Get(':id')
findOne(@Param() id: string): string    {
    console.log(id);
    return `This action returns a rat number #${id}`;
}

@Post()

async create(@Body() createRatDto: CreateRatDTO): Promise<string>   {
    return 'This action is to insert a new Rat';
}

@Put(':id')

async update(@Param('id') id:number,@Body() updateRatDto: UpdateRatDTO): Promise<string>  {
return `This action update this rat whit number #${id}`;

}

@Patch(':id')
async patchCats(@Param('id') id: number, @Body() updateRatDto: UpdateRatDTO): Promise<string>{
    return `This action recover data of rat number #${id}`;
}


@Delete(':id')
async remove(@Param('id') id: number): Promise<string> {

    return `This action eliminate the cat number #${id}`;
 
}


}