import type { OpcaoTamanho, TipoMacarrao } from '../types'

export const TIPOS_MACARRAO: TipoMacarrao[] = ['Espaguete', 'Penne']

export const QUANTIDADE_MINIMA = 1
export const QUANTIDADE_MAXIMA = 5

export const TAMANHOS: OpcaoTamanho[] = [
  { codigo: 'PQ', label: 'Pequeno', preco: 25 },
  { codigo: 'MD', label: 'Médio', preco: 30 },
  { codigo: 'GD', label: 'Grande', preco: 35 },
]

export const MOLHOS: string[] = ['Branco', 'Bolonhesa', 'Tomate']

export const CARNES: string[] = ['Apresuntado', 'Bacon', 'Calabresa', 'Frango']

export const QUEIJOS: string[] = ['Mussarela', 'Parmesão', 'Provolone']

export const OUTROS_INGREDIENTES: string[] = [
  'Alho',
  'Cebola',
  'Cebolinha Verde',
  'Orégano',
  'Pimenta do Reino',
  'Pimenta Calabresa',
  'Azeitona',
  'Ervilha',
  'Milho',
  'Palmito',
  'Tomate',
  'Uva Passa',
]

export function precoPorTamanho(codigo: string): number {
  return TAMANHOS.find((t) => t.codigo === codigo)?.preco ?? 0
}
