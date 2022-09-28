import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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

  //TODO: relacionamento das FK
}
