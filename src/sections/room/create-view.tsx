'use client'

import { useGameStore } from '@/libs/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CreateView() {
  const router = useRouter()
  const isLogged = useGameStore((state) => state.user.isLogged)
  
  useEffect(() => {
    if (!isLogged){
      router.push('/')
    }
  }, [isLogged,router]);


  return (
    <main className="w-full bg-martin ique-950 h-screen flex items-center justify-center">
      <div className="fixed border border-white w-1/2 p-2 flex flex-col items-center justify-center gap-2">
        <h1 className="text-red-500 text-8xl">Memealo</h1>

        <form
          action=""
          className="flex flex-col bg-red-400 items-center justify-center gap-1 text-xl"
        >
          <label className="block ">
            Nombre de sala:
            <input
              type="text"
              placeholder="Sala de martin"
              className="block mt-3 p-1 border rounded-xl"
            />
          </label>
          <span>error</span>

          <label className="block">
            Contraseña:
            <input
              type="password"
              placeholder="1234"
              className="block  mt-3 p-1 border rounded-xl"
            />
          </label>

          <span>error</span>
          <button>Crear Sala</button>
        </form>
      </div>
    </main>
  )
}
