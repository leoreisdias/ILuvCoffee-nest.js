import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { FlavorsEntity } from "./flavors.entity";

@Entity('coffees')
export class CoffeeEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(
        type => FlavorsEntity,
        flavors => flavors.coffees,
        {
            cascade: true
        }
    )
    flavors: FlavorsEntity[];
}