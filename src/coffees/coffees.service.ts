import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeesDto } from './dto/create-coffees.dto';
import { CoffeeEntity } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
    private coffees: CoffeeEntity[] = [
        {
            id: 1,
            name: 'Expresso',
            brand: 'Cafe Minas',
            flavors: ['Camumila']
        }
    ]


    findAll(){
        return this.coffees;
    }

    findOne(id: number){
        // throw 'An unexpected error';
        const coffee = this.coffees.find(item => item.id == +id);
        if(!coffee)
            // throw new HttpException('Coffe was not Found', HttpStatus.NOT_FOUND);
            throw new NotFoundException('Coffe was not Found');

        return coffee;
    }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);

        return createCoffeeDto;
    }

    update(id: number, updateCoffeeDto: any){
        const existintCoffee = this.findOne(id);
        if(existintCoffee){
            //update ...
        }
    }

    remove(id: number){
        const coffeeIndex = this.coffees.findIndex(item => item.id == +id);
        if(coffeeIndex >=0){
            this.coffees.splice(coffeeIndex,1);
        }
    }
}
