/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @CreateDateColumn()
    createdAt!: Date

    @CreateDateColumn()
    updatedAt!: Date
}
