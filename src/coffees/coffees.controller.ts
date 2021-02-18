import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeesDto } from './dto/create-coffees.dto';
import { UpdateCoffeesDto } from './dto/update-coffees.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(
        private readonly coffeeService: CoffeesService
    ){}

    @Get('flavors')
    findAll(@Res() response){
        response.status(HttpStatus.GONE).send('This would return all Datas in /coffes endpoint.');
    }

    @Get()
    @HttpCode(HttpStatus.GONE) //Recommended
    findPureAll(@Query() nameQuery){
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOneParam(@Param() params){
        return `This would return a specific ${params.id} element`;
    }

    @Get('/destructor/:newId')
    findOneDestructorParam(@Param('newId') newId: number){
        console.log(typeof newId);
        return this.coffeeService.findOne(newId);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeesDto){
        console.log(createCoffeeDto instanceof CreateCoffeesDto)
        return this.coffeeService.create(createCoffeeDto);
    }

    @Post('partialBody')
    createPartial(@Body('name') body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:number, @Body() updateCoffeesDto: UpdateCoffeesDto){
        return this.coffeeService.update(id, updateCoffeesDto);
    }

    @Put(':id')
    updateFull(@Param('id') id: number, @Body() body){
        return `This will give a FULL update the body of the #${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.coffeeService.remove(id);
    }
}
 