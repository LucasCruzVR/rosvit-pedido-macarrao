export type TipoMacarrao = 'Espaguete' | 'Penne'

export type Tamanho = 'PQ' | 'MD' | 'GD'

export interface OpcaoTamanho {
  codigo: Tamanho
  label: string
  preco: number
}

/** Um pedido individual de macarrão configurado pelo cliente. */
export interface PedidoMacarrao {
  id: string
  nomeCliente: string
  tipo: TipoMacarrao
  tamanho: Tamanho
  molhos: string[]
  carnes: string[]
  queijos: string[]
  outrosIngredientes: string[]
}

export function criarPedidoVazio(id: string): PedidoMacarrao {
  return {
    id,
    nomeCliente: '',
    tipo: 'Espaguete',
    tamanho: 'MD',
    molhos: [],
    carnes: [],
    queijos: [],
    outrosIngredientes: [],
  }
}
