import { DateTime } from 'luxon'
import { BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Funcionario from 'App/models/Funcionario'


export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public rg: string

  @column()
  public senha: string

  @column()
  public logradouro: string

  @column()
  public cep: string

  @column()
  public bairro: string

  @column()
  public numero: string

  @column()
  public complemento: string | null

  @hasMany(() => Funcionario, { foreignKey: 'usuario_id' })
  public funcionario_id: HasMany<typeof Funcionario>
}
