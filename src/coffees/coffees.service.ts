import { Injectable } from '@nestjs/common';
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

    findOne(id: string){
        return this.coffees.find(item => item.id == +id);
    }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeeDto: any){
        const existintCoffee = this.findOne(id);
        if(existintCoffee){
            //update ...
        }
    }

    remove(id: string){
        const coffeeIndex = this.coffees.findIndex(item => item.id == +id);
        if(coffeeIndex >=0){
            this.coffees.splice(coffeeIndex,1);
        }
    }
}
