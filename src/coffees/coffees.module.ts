import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { CoffeeEntity } from './entities/coffees.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CoffeeEntity])],
    controllers: [CoffeesController],
    providers: [CoffeesService]
})
export class CoffeesModule {}
