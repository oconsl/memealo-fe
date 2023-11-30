"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { object, string } from "yup";

import loginImage from "@/assets/images/login.webp";
import Image from "next/image";

type Inputs = {
  username: String;
  password: String;
};

let loginSchema = object({
  username: string()
    .required("Nombre de usuario es requerido")
    .min(3, "El nombre de usuario debe contener al menos 3 caracteres")
    .max(20, "El nombre de usuario no puede contener mas de 20 caracteres"),
  password: string()
    .required("Contraseña es requerida")
    .min(8, "La contraseña debe contener al menos 3 caracteres")
    .max(20, "La contraseña no puede contener mas de 20 caracteres"),
});

export default function Page() {
  const { register, handleSubmit } = useForm<Inputs>();

  const [error, setError] = useState<any>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setError(false);
    try {
      await loginSchema.validate(data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <main className="w-full bg-martinique-950 h-screen flex items-center justify-center">
      <section className="w-2/5 h-5/6 max-w-md py-10 bg-astral-900 relative flex flex-col items-center justify-center rounded-3xl shadow-xl border-[3px] border-astral-950">
        <h1 className="text-8xl relative tracking-tighter scale-y-110 -rotate-12 lowercase font-display text-brown-pod-300 stroke title-shadow">
          Memealo!
        </h1>
        <form
          className="flex w-full h-4/6 my-3 flex-col items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex flex-col w-4/6 z-20 text-stroke">
            <span>Nombre De Usuario:</span>
            <input
              className="my-3 rounded-full text-black py-0.5 px-3 transition-all focus:outline focus:outline-2 focus:outline-astral-950"
              {...register("username", { required: true })}
            />
          </label>
          <label className="flex flex-col w-4/6 z-20 text-stroke">
            Contraseña:
            <input
              className="my-3 rounded-full text-black py-0.5 px-3 transition-all focus:outline focus:outline-2 focus:outline-astral-950"
              type="password"
              {...register("password", { required: true })}
            />
          </label>
          <button
            type="submit"
            className="cursor-pointer my-3 text-3xl text-brown-pod-300 stroke-btn title-shadow"
          >
            Iniciar Sesion
          </button>
          {error && (
            <div className="w-4/6 h-14 py-1 rounded-full flex items-center justify-center bg-coral-red-400 z-20">
              <p className="text-brown-pod-300 text-lg">{error.message}</p>
            </div>
          )}
        </form>
        <Image
          src={loginImage}
          alt="Login"
          width={250}
          height={250}
          className="absolute rounded-3xl bottom-0 right-0 z-10"
        />
      </section>
    </main>
  );
}
