import { Header } from './components/Header'
import { PedidoCard } from './components/PedidoCard'
import { ResumoEnvio } from './components/ResumoEnvio'
import { usePedidos } from './hooks/usePedidos'

function App() {
  const { pedidos, adicionarPedido, removerPedido, atualizarPedido, alterarQuantidade, alternarItemLista, totalGeral } =
    usePedidos()

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ec]">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-2xl px-4 py-6 space-y-6 pb-28">
        {pedidos.map((pedido, indice) => (
          <PedidoCard
            key={pedido.id}
            pedido={pedido}
            indice={indice}
            podeRemover={pedidos.length > 1}
            onAtualizar={(alteracoes) => atualizarPedido(pedido.id, alteracoes)}
            onAlterarQuantidade={(delta) => alterarQuantidade(pedido.id, delta)}
            onAlternarItem={(campo, item) => alternarItemLista(pedido.id, campo, item)}
            onRemover={() => removerPedido(pedido.id)}
          />
        ))}

        <button
          type="button"
          onClick={adicionarPedido}
          className="w-full rounded-xl border-2 border-dashed border-rosvit-red/40 bg-white py-4 text-sm font-semibold text-rosvit-red transition-colors hover:bg-rosvit-red/5"
        >
          + Adicionar outro macarrão
        </button>
      </main>

      <ResumoEnvio pedidos={pedidos} totalGeral={totalGeral} />
    </div>
  )
}

export default App
