import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('flavors/teste')
    @HttpCode(HttpStatus.GONE) //Recommended
    findAll(){
        return 'This would return all flavors in the next Endpoint (/coffee/flavors)';
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
}
 