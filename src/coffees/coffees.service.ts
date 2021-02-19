import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeesDto } from './dto/create-coffees.dto';
import { UpdateCoffeesDto } from './dto/update-coffees.dto';
import { CoffeeEntity } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
    constructor(
        @InjectRepository(CoffeeEntity)
        private readonly coffeeRepository: Repository<CoffeeEntity>
    ){}


    findAll(){
        return this.coffeeRepository.find({
            relations: ['flavors']
        });
    }

    async findOne(id: number){
        // throw 'An unexpected error';
        const coffee = this.coffeeRepository.findOne(id,{
            relations: ['flavors']
        });
        if(!coffee)
            // throw new HttpException('Coffe was not Found', HttpStatus.NOT_FOUND);
            throw new NotFoundException('Coffe was not Found');

        return coffee;
    }

    create(createCoffeeDto: CreateCoffeesDto){
        const coffee = this.coffeeRepository.create(createCoffeeDto);

        return this.coffeeRepository.save(coffee);
    }

    async update(id: number, updateCoffeeDto: UpdateCoffeesDto){
        const coffee = await this.coffeeRepository.preload({
            id: +id,
            ...updateCoffeeDto
        });

        if(!coffee){
            throw new HttpException('Coffee was not found', HttpStatus.NOT_FOUND);
        }

        return this.coffeeRepository.save(coffee);
    }

    async remove(id: number){
        const coffee = await this.findOne(id);

        if(!coffee){
            throw new NotFoundException('Não foi possivel achar o Coffee');
        }

        return this.coffeeRepository.remove(coffee);
    }
}
