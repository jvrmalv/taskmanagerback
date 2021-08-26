import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class Inital1629998221342 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Tasks",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {

                    name: "name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "completed",
                    type: "boolean",
                    isNullable: false
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Tasks");
    }
}