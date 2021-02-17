import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

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
    findOneDestructorParam(@Param('newId') newId: string){
        return this.coffeeService.findOne(newId);
    }

    @Post()
    create(@Body() body){
        return this.coffeeService.create(body);
    }

    @Post('partialBody')
    createPartial(@Body('name') body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return this.coffeeService.update(id, body);
    }

    @Put(':id')
    updateFull(@Param('id') id: string, @Body() body){
        return `This will give a FULL update the body of the #${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeeService.remove(id);
    }
}
 