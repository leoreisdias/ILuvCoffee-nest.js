import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { CoffeeEntity } from './entities/coffees.entity';
import { FlavorsEntity } from './entities/flavors.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CoffeeEntity, FlavorsEntity])],
    controllers: [CoffeesController],
    providers: [CoffeesService]
})
export class CoffeesModule {}
