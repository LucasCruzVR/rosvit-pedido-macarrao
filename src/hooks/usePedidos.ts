import { useCallback, useState } from 'react'
import { criarPedidoVazio, type PedidoMacarrao } from '../types'
import { precoPorTamanho } from '../data/ingredientes'

let contador = 0
function proximoId(): string {
  contador += 1
  return `pedido-${Date.now()}-${contador}`
}

export function usePedidos() {
  const [pedidos, setPedidos] = useState<PedidoMacarrao[]>([criarPedidoVazio(proximoId())])

  const adicionarPedido = useCallback(() => {
    setPedidos((atual) => [...atual, criarPedidoVazio(proximoId())])
  }, [])

  const removerPedido = useCallback((id: string) => {
    setPedidos((atual) => (atual.length > 1 ? atual.filter((p) => p.id !== id) : atual))
  }, [])

  const atualizarPedido = useCallback((id: string, alteracoes: Partial<PedidoMacarrao>) => {
    setPedidos((atual) => atual.map((p) => (p.id === id ? { ...p, ...alteracoes } : p)))
  }, [])

  const alternarItemLista = useCallback(
    (id: string, campo: 'molhos' | 'carnes' | 'queijos' | 'outrosIngredientes', item: string) => {
      setPedidos((atual) =>
        atual.map((p) => {
          if (p.id !== id) return p
          const listaAtual = p[campo]
          const jaSelecionado = listaAtual.includes(item)
          const novaLista = jaSelecionado
            ? listaAtual.filter((i) => i !== item)
            : [...listaAtual, item]
          return { ...p, [campo]: novaLista }
        }),
      )
    },
    [],
  )

  const totalGeral = pedidos.reduce((soma, p) => soma + precoPorTamanho(p.tamanho), 0)

  return {
    pedidos,
    adicionarPedido,
    removerPedido,
    atualizarPedido,
    alternarItemLista,
    totalGeral,
  }
}
