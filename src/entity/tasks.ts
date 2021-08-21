import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity("tasks")
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Column("varchar", { nullable: false })
    public name!: string;

    @Column("boolean", { nullable: true })
    public completed!: boolean;

}