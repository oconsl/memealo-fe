'use client'

import { useGameStore } from '@/libs/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

let createRoomSchema = object({
  roomName: string()
    .required('Nombre de sala es requerido')
    .min(5, 'El nombre de la sala debe tener al menos 5 caracteres')
    .max(20, 'El nombre de la sala no puede contener mas de 20 caracteres'),
  password: string()
    .required('Contraseña es requerida')
    .min(5, 'La contraseña debe contener al menos 5 caracteres')
    .max(20, 'La contraseña no puede contener mas de 20 caracteres')
})

type Inputs = {
  roomName: string
  password: string
}

export default function CreateView() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<Inputs>({ resolver: yupResolver(createRoomSchema) })
  const router = useRouter()
  const user = useGameStore((state) => state.user)
  console.log(errors)
  useEffect(() => {
    if (!user.isLogged) {
      router.replace('/')
    }
  }, [user.isLogged, router])

  return (
    <main className="w-full bg-martinique-950 h-screen flex items-center justify-center">
      <div className="w-1/2 h-5/6 max-w-md p-2 bg-astral-900 relative flex flex-col items-center justify-center rounded-3xl shadow-xl border-[3px] border-astral-950">
        <h1 className="text-8xl relative tracking-tighter scale-y-110 -rotate-12 lowercase font-display text-brown-pod-300 stroke title-shadow  bottom-[4rem]">
          Memealo
        </h1>

        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col items-center justify-center gap-10 text-xl  w-[90%] p-1"
        >
          <label className=" flex flex-col w-5/6 relative z-20 ">
            Nombre de sala:
            <input
              type="text"
              placeholder={`Sala de ${user.username}`}
              className="block mt-2 p-1  rounded-xl"
              {...register('roomName')}
            />
            {errors?.roomName?.message && (
              <p className=" text-yellow-400 text-base">
                {errors?.roomName?.message}
              </p>
            )}
          </label>

          <label className=" flex flex-col w-5/6 relative z-20 ">
            Contraseña:
            <input
              type="password"
              placeholder="1234"
              className="block  mt-3 p-1  rounded-xl"
              {...register('password')}
            />
            {errors?.password?.message && (
              <p className=" text-yellow-400 text-base">
                {errors?.password?.message}
              </p>
            )}
          </label>

          <button className="text-5xl scale-y-110 lowercase font-display text-brown-pod-300 stroke title-shadow  bottom-[4rem] tracking-tight">
            Crear Sala
          </button>
        </form>
      </div>
    </main>
  )
}
