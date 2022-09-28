import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Carga from './Carga'

export default class Rota extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public dist_percorrida: string

    @hasMany(() => Carga)
    public carga: HasMany<typeof Carga>
}
