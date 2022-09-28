import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Rota from './Rota'
import Veiculo from './Veiculo'

export default class Carga extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public previsao: string

  @column()
  public end_entrega: string

  @column()
  public end_retirada: string

  @column()
  public tipo: string

  @column()
  public obs: string

  @column()
  public dest_nome: string

  @column()
  public status_rastreio: string

  @column()
  public dimensoes: string

  @column()
  public volume: string

  @column()
  public veiculo_id: number

  @column()
  public rota_id: number

  @column()
  public motorista_id: number

  @belongsTo(() => Veiculo)
  public veiculo: BelongsTo<typeof Veiculo>

  @belongsTo(() => Rota)
  public rota: BelongsTo<typeof Rota>
}
