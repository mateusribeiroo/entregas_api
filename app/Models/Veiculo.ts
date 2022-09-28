import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Carga from './Carga'

export default class Veiculo extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public qtd_eixos: string

    @column()
    public modelo: string

    @column()
    public marca: string

    @hasMany(() => Carga)
    public carga: HasMany<typeof Carga>
}