'use client'

import { useState } from 'react'

export default function AniadirItem() {
  const [texto, setTexto] = useState('')
  const [lista, setLista] = useState<string[]>([])

  function aniadir() {
    if (texto.trim() === '') return
    setLista([...lista, texto])
    setTexto('')
  }

  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 text-slate-900 placeholder:text-slate-500 outline-none"
          type="text"
          placeholder="Ej. Chaleco salvavidas"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white font-semibold rounded-xl px-10 py-3"
          type="button"
          onClick={aniadir}
        >
          +Añadir
        </button>
      </div>

      <ul className="mt-4">
        {lista.map((item, i) => (
          <li key={i} className="text-gray-700 py-1">- {item}</li>
        ))}
      </ul>
    </div>
  )
}
