import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'veiculos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.integer('qtde_eixos').notNullable()
      table.string('modelo').notNullable()
      table.string('marca').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
