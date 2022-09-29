import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('num_INSS').notNullable()
      table.date('data_nasc').notNullable()
      table.date('data_admissao').notNullable()
      table.integer('periodo').notNullable()
      table.integer('jornada').notNullable()
      table.string('remuneracao').notNullable()
      table.integer('tipo_cargo').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
