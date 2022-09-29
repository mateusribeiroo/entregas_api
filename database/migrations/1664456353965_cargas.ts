import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cargas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('previsao').notNullable()
      table.string('end_entrega').nullable()
      table.string('end_retirada').nullable()
      table.string('tipo').notNullable()
      table.string('obs').nullable()
      table.string('dest_nome').notNullable()
      table.enum('status_rastreio', [
        'SEPARADO_NO_ESTOQUE',
        'NA_TRANSPORTADORA',
        'INDO_PARA_CIDADE_DESTINO',
        'A_CAMINHO',
        'ENTREGUE'
      ]).notNullable()
      table.string('dimensoes').notNullable()
      table.string('volume').notNullable()
      table.integer('veiculo_id').references('veiculos.id').nullable().unsigned()
      table.integer('rota_id').references('rotas.id').nullable().unsigned()
      table.integer('motorista_id').references('funcionarios.id').unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
