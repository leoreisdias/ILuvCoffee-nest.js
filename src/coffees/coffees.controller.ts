import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('flavors')
    @HttpCode(HttpStatus.GONE) //Recommended
    findAll(@Query() nameQuery){
        const {limit, offset } = nameQuery
        return `This would return all flavors in the next Endpoint (/coffee/flavors), with the Query Limit=${limit} e Offset=${offset}}`;
    }

    @Get()
    findPureAll(@Res() response){
        response.status(HttpStatus.GONE).send('This would return all Datas in /coffes endpoint.');
    }

    @Get(':id')
    findOneParam(@Param() params){
        return `This would return a specific ${params.id} element`;
    }

    @Get('/destructor/:newId')
    findOneDestructorParam(@Param('newId') newId: string){
        return `This would return a specific ${newId} from inside params with destructuring.`;
    }

    @Post()
    create(@Body() body){
        return body;
    }

    @Post('partialBody')
    createPartial(@Body('name') body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return `This will give a PARTIAL update the body of the #${id}`;
    }

    @Put(':id')
    updateFull(@Param('id') id: string, @Body() body){
        return `This will give a FULL update the body of the #${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `This will remove the ${id}`;
    }
}
 