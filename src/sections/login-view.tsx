"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Loading from "@/components/loading";
import loginImage from "@/assets/images/login.webp";
import { useGameStore } from "@/libs/store";

type Inputs = {
  username: string;
  password: string;
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
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });

  const userStore = useGameStore((state) => state.user);
  const login = useGameStore((state) => state.signIn);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const [error, setError] = useState<any>(false);

  useEffect(() => {
    if (userStore.isLogged) {
      redirect("/");
    }
  }, [userStore.isLogged]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await loginSchema.validate(data);
      await login(data.username, data.password);
      if (userStore.isLogged) redirect("/");
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
          className="flex w-full h-4/6 my-3 flex-col text-xl items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex flex-col w-5/6 relative z-20 label-stroke">
            <span>Nombre De Usuario:</span>
            <input
              className="my-3 mb-0 rounded-full text-black py-1 px-4 transition-all focus:outline focus:outline-2 focus:outline-astral-950"
              {...register("username", { required: true })}
            />
            {errors.username ? (
              <span className="text-brown-pod-300 text-sm">
                {errors.username.message}
              </span>
            ) : (
              ""
            )}
          </label>
          <label className="flex my-3 flex-col w-5/6 z-20 label-stroke">
            Contraseña:
            <input
              className="my-3 mb-0 rounded-full text-black py-1 px-4 transition-all focus:outline focus:outline-2 focus:outline-astral-950"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password ? (
              <span className="text-brown-pod-300 text-sm">
                {errors.password.message}
              </span>
            ) : (
              ""
            )}
          </label>
          <button
            type="submit"
            className="cursor-pointer active:title-shadow-none transition-none my-3 text-4xl text-brown-pod-300 stroke-btn title-shadow z-20"
          >
            {isSubmitting ? <Loading /> : "Iniciar Sesión"}
          </button>
        </form>
        <span className="text-brown-pod-300 text-lg z-20">
          No tienes cuenta?{" "}
          <a href="/register" className="text-shadow text-stroke">
            Registrate
          </a>
        </span>
        <Image
          src={loginImage}
          alt="Login"
          width={200}
          height={200}
          className="absolute rounded-3xl bottom-0 right-0 z-10"
        />
      </section>
      <Image
        src="/memes/guy-pointing.webp"
        width={200}
        height={200}
        alt="Meme"
        className="absolute bottom-0 left-0 z-0"
      />
      <Image
        src="/memes/guy-pointing-2.webp"
        width={250}
        height={250}
        alt="Meme"
        className="absolute bottom-0 right-0 z-0"
      />
    </main>
  );
}
