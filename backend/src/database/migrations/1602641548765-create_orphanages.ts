import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602641548765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //irá realizar alterações dentro do banco de dados, como criar tabelas, criar campo, deletar algo...
        await queryRunner.createTable(new Table({   //criando as tabelas que conteram as informações dos orfanatos
          name: 'orphanages',
          columns: [
            {
              name: 'id',
              type: 'integer',
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'name',
              type: 'varchar',

            },
            {
              name: 'latitude',
              type: 'varchar',
            },
            {
              name: 'longitude',
              type: 'varchar',
            },
            {
              name: 'about',
              type: 'text',
            },
            {
              name: 'instructions',
              type: 'text',
            },
            { 
              name: 'opening_hours',
              type: 'varchar',
            },
            {
              name: 'open_on_weekends',
              type: 'boolean',
              default: 'false',
            },

          ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //desfaz o que foi feito no modulo up
        await queryRunner.dropTable('orphanages');
    }

}
