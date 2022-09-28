import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Carga from './Carga'

export default class Veiculo extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @column()
    public qtd_eixos: string

    @column()
    public modelo: string

    @column()
    public marca: string

    @hasMany(() => Carga)
    public carga: HasMany<typeof Carga>
}