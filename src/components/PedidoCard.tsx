import type { PedidoMacarrao, Tamanho, TipoMacarrao } from '../types'
import { CARNES, MOLHOS, OUTROS_INGREDIENTES, QUEIJOS, TAMANHOS, TIPOS_MACARRAO, precoPorTamanho } from '../data/ingredientes'
import { ListaSelecionavel } from './ListaSelecionavel'

interface PedidoCardProps {
  pedido: PedidoMacarrao
  indice: number
  podeRemover: boolean
  onAtualizar: (alteracoes: Partial<PedidoMacarrao>) => void
  onAlternarItem: (campo: 'molhos' | 'carnes' | 'queijos' | 'outrosIngredientes', item: string) => void
  onRemover: () => void
}

function formatarPreco(valor: number): string {
  return valor.toFixed(2).replace('.', ',')
}

export function PedidoCard({ pedido, indice, podeRemover, onAtualizar, onAlternarItem, onRemover }: PedidoCardProps) {
  const preco = precoPorTamanho(pedido.tamanho)

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between bg-rosvit-black text-rosvit-cream px-4 py-3">
        <h2 className="font-display font-semibold text-lg">Macarrão {indice + 1}</h2>
        <div className="flex items-center gap-3">
          <span className="text-rosvit-red font-semibold">R$ {formatarPreco(preco)}</span>
          {podeRemover && (
            <button
              type="button"
              onClick={onRemover}
              aria-label={`Remover Macarrão ${indice + 1}`}
              className="text-rosvit-cream/70 hover:text-rosvit-red text-sm"
            >
              Remover
            </button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-5">
        <div>
          <label htmlFor={`nome-${pedido.id}`} className="text-sm font-semibold uppercase tracking-wide text-rosvit-black/70 mb-2 block">
            Nome (opcional)
          </label>
          <input
            id={`nome-${pedido.id}`}
            type="text"
            placeholder="Para quem é esse pedido?"
            value={pedido.nomeCliente}
            onChange={(e) => onAtualizar({ nomeCliente: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-rosvit-red focus:outline-none focus:ring-1 focus:ring-rosvit-red"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor={`tipo-${pedido.id}`} className="text-sm font-semibold uppercase tracking-wide text-rosvit-black/70 mb-2 block">
              Tipo de macarrão
            </label>
            <select
              id={`tipo-${pedido.id}`}
              value={pedido.tipo}
              onChange={(e) => onAtualizar({ tipo: e.target.value as TipoMacarrao })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-rosvit-red focus:outline-none focus:ring-1 focus:ring-rosvit-red"
            >
              {TIPOS_MACARRAO.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor={`tamanho-${pedido.id}`} className="text-sm font-semibold uppercase tracking-wide text-rosvit-black/70 mb-2 block">
              Tamanho
            </label>
            <select
              id={`tamanho-${pedido.id}`}
              value={pedido.tamanho}
              onChange={(e) => onAtualizar({ tamanho: e.target.value as Tamanho })}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-rosvit-red focus:outline-none focus:ring-1 focus:ring-rosvit-red"
            >
              {TAMANHOS.map((t) => (
                <option key={t.codigo} value={t.codigo}>
                  {t.codigo} - {t.label} (R$ {formatarPreco(t.preco)})
                </option>
              ))}
            </select>
          </div>
        </div>

        <ListaSelecionavel
          titulo="Molhos"
          opcoes={MOLHOS}
          selecionados={pedido.molhos}
          onToggle={(item) => onAlternarItem('molhos', item)}
        />

        <ListaSelecionavel
          titulo="Carnes"
          opcoes={CARNES}
          selecionados={pedido.carnes}
          onToggle={(item) => onAlternarItem('carnes', item)}
        />

        <ListaSelecionavel
          titulo="Queijos"
          opcoes={QUEIJOS}
          selecionados={pedido.queijos}
          onToggle={(item) => onAlternarItem('queijos', item)}
        />

        <ListaSelecionavel
          titulo="Outros ingredientes"
          opcoes={OUTROS_INGREDIENTES}
          selecionados={pedido.outrosIngredientes}
          onToggle={(item) => onAlternarItem('outrosIngredientes', item)}
        />
      </div>
    </div>
  )
}
