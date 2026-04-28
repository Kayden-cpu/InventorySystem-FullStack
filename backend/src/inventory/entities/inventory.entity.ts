/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InventoryItem {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 250, nullable: false})
    name!: string

    @Column({length: 500})
    description?: string

    @Column({length: 80})
    imageUrl?: string

    @Column({length: 25, unique: true, nullable: false})
    sku!: string

    @Column({type: "double", nullable: false})
    price!: number

    @Column({type: "int", nullable: false})
    stockQuantity!: number

    @Column({type: "text"})
    availableMedium?: "Online" | "In Store"

    @Column({type: "boolean"})
    isActive!: boolean

    @Column({type: "datetime", nullable: false, default: new Date()})
    createdAt!: Date

    @Column({type: "datetime", nullable: false, default: new Date()})
    updatedAt!: Date
}
