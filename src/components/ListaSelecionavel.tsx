interface ListaSelecionavelProps {
  titulo: string
  opcoes: string[]
  selecionados: string[]
  onToggle: (item: string) => void
}

export function ListaSelecionavel({ titulo, opcoes, selecionados, onToggle }: ListaSelecionavelProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold uppercase tracking-wide text-rosvit-black/70 mb-2">
        {titulo}
      </legend>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {opcoes.map((opcao) => {
          const marcado = selecionados.includes(opcao)
          return (
            <label
              key={opcao}
              className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm cursor-pointer transition-colors select-none ${
                marcado
                  ? 'border-rosvit-red bg-rosvit-red/10 text-rosvit-black'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-rosvit-red/50'
              }`}
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-rosvit-red"
                checked={marcado}
                onChange={() => onToggle(opcao)}
              />
              {opcao}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
