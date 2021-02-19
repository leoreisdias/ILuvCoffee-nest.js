import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CoffeeEntity } from "./coffees.entity";

@Entity('flavors')
export class FlavorsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar"
    })
    name: string;

    @ManyToMany(
        type=> CoffeeEntity,
        coffees => coffees.flavors
    )
    coffees: CoffeeEntity[]
}
