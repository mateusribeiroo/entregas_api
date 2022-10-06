import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Carga from './Carga'

export default class Funcionario extends BaseModel {
    @column()
    public usuario_id: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @column()
    public num_INSS: string

    @column.date()
    public data_nasc: DateTime

    @column.date()
    public data_admissao: DateTime

    @column()
    public periodo: number

    @column()
    public jornada: number

    // string para manter a precisao
    @column()
    public remuneracao: string

    @column()
    public tipo_cargo: number

    @hasMany(() => Carga)
    public carga: HasMany<typeof Carga>
}