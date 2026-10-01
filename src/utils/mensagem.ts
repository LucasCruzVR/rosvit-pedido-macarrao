import type { PedidoMacarrao } from '../types'
import { TAMANHOS, precoPorTamanho } from '../data/ingredientes'
import { LOJA } from '../data/loja'

function formatarPreco(valor: number): string {
  return valor.toFixed(2).replace('.', ',')
}

function labelTamanho(codigo: string): string {
  return TAMANHOS.find((t) => t.codigo === codigo)?.label ?? codigo
}

function formatarLinhaLista(titulo: string, itens: string[]): string | null {
  if (itens.length === 0) return null
  return `${titulo}: ${itens.join(', ')}`
}

export function formatarPedidoUnico(pedido: PedidoMacarrao, indice: number): string {
  const preco = precoPorTamanho(pedido.tamanho)
  const nomeParte = pedido.nomeCliente.trim() ? ` - ${pedido.nomeCliente.trim()}` : ''
  const linhas: string[] = [
    `Pedido ${indice + 1}${nomeParte}: ${pedido.tipo} (${pedido.tamanho} - ${labelTamanho(pedido.tamanho)} - R$ ${formatarPreco(preco)})`,
  ]

  const molhos = formatarLinhaLista('Molho', pedido.molhos)
  const carnes = formatarLinhaLista('Carnes', pedido.carnes)
  const queijos = formatarLinhaLista('Queijos', pedido.queijos)
  const outros = formatarLinhaLista('Outros', pedido.outrosIngredientes)

  for (const linha of [molhos, carnes, queijos, outros]) {
    if (linha) linhas.push(linha)
  }

  return linhas.join('\n')
}

export function formatarMensagemCompleta(pedidos: PedidoMacarrao[]): string {
  const blocos = pedidos.map((pedido, indice) => formatarPedidoUnico(pedido, indice))
  const total = pedidos.reduce((soma, p) => soma + precoPorTamanho(p.tamanho), 0)

  const cabecalho = `Olá! Gostaria de fazer o seguinte pedido na ${LOJA.nome} - ${LOJA.subtitulo}:`
  const rodape = `Total: R$ ${formatarPreco(total)}`

  return [cabecalho, '', ...blocos.map((b) => b + '\n'), rodape].join('\n')
}

export function montarLinkWhatsapp(pedidos: PedidoMacarrao[]): string {
  const mensagem = formatarMensagemCompleta(pedidos)
  return `https://wa.me/${LOJA.whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}
