import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";
//This the entity typing for TypeORM
@Entity("tasks")
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Column("varchar", { nullable: false })
    public name!: string;

    @Column("boolean", { nullable: true })
    public completed!: boolean;

}