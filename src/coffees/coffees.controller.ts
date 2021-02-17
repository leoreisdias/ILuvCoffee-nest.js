import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get('flavors/teste')
    findAll(){
        return 'This would return all flavors in the next Endpoint (/coffee/flavors)';
    }

    @Get()
    findPureAll(){
        return 'This would return all Datas in /coffes endpoint.';
    }

    @Get(':id')
    findOneParam(@Param() params){
        return `This would return a specific ${params.id} element`;
    }

    @Get('/destructor/:newId')
    findOneDestructorParam(@Param('newId') newId: string){
        return `This would return a specific ${newId} from inside params with destructuring.`;
    }
}
 