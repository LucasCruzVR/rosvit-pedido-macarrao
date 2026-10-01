import type { PedidoMacarrao } from '../types'
import { montarLinkWhatsapp } from '../utils/mensagem'

interface ResumoEnvioProps {
  pedidos: PedidoMacarrao[]
  totalGeral: number
}

function formatarPreco(valor: number): string {
  return valor.toFixed(2).replace('.', ',')
}

export function ResumoEnvio({ pedidos, totalGeral }: ResumoEnvioProps) {
  const linkWhatsapp = montarLinkWhatsapp(pedidos)

  return (
    <div className="sticky bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur px-4 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-2xl flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {pedidos.length} {pedidos.length === 1 ? 'macarrão' : 'macarrões'}
          </p>
          <p className="font-display text-xl font-bold text-rosvit-black">
            Total: R$ {formatarPreco(totalGeral)}
          </p>
        </div>

        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-rosvit-red px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rosvit-redDark active:scale-95"
        >
          Enviar pedido
        </a>
      </div>
    </div>
  )
}
