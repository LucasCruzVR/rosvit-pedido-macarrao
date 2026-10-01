import { LOJA } from '../data/loja'
import logoRosvit from '../assets/logo-rosvit-cropped.jpeg'

export function Header() {
  return (
    <header className="bg-[#f0e9dd] text-rosvit-black">
      <div className="mx-auto max-w-2xl px-4 py-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-rosvit-red mb-1">Monte seu pedido</p>

        <img
          src={logoRosvit}
          alt={`${LOJA.nome} - ${LOJA.subtitulo}`}
          className="mx-auto w-56 sm:w-64 object-contain"
        />

        <div className="mt-1 flex flex-col items-center gap-0.5 text-xs text-rosvit-black/60">
          <span>{LOJA.endereco}</span>
          <span>
            {LOJA.telefoneFixo} · {LOJA.telefoneExibicao}
          </span>
        </div>
      </div>
      <div className="h-1 bg-rosvit-red" />
    </header>
  )
}
