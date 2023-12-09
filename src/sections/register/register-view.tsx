"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Squada_One } from "next/font/google";
import Head from "next/head";

const Squada = Squada_One({ subsets: ["latin"], weight: "400" });

export default function RegisterView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <div className="bg-martinique-950 h-[100svh] w-screen">
        
        <div className={Squada.className}>
          <h1 className=" text-brown-pod-logo-color text-9xl text-stroke">
            {" "}
            Bienvenido a memealo{" "}
          </h1>
          
          <div className=" box-border px-28 rounded-xl border-4 border-solid border-martinique-border bg-martinique-inner-color shadow-2xl fixed right-0 mr-20">
            <h2 className="text-brown-pod-logo-color text-7xl mb-28 -rotate-12 text-center mt-28 text-stroke"> memealo! </h2>
            
            <form className="text-white" onSubmit={onSubmit}>
              <div className="flex flex-col justify-center items-center mb-20">
                
              <div className="flex flex-col">

              
              <label className="text-xl" htmlFor="username"> Nombre De Usuario: </label>
              <input
                className="rounded-3xl  border-2  bg-martinique-input-gray border-martinique-border text-black  mb-5 shadow-2xl"
                id="username"
                type="text"
                {...register("username", {
                  required: true,
                })}
              />

              {errors.username && (
                <span className=" inline-block text-red-600  bg-lime-500">
                  {" "}
                  El nombre de usuario es requerido
                </span>
              )}

              <label className="text-xl"  htmlFor="email"> Email: </label>
              <input
                className="rounded-3xl border-2  bg-martinique-input-gray border-martinique-border  text-black mb-5 shadow-2xl"
                id="email"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo electrónico es requerido",
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "El correo electrónico no es válido"
                  },
                })}
              />

              {errors.email && (
                <span className=" inline-block text-red-600   bg-lime-500">
                  {" "}
                  El correo electrónico es requerido
                </span>
              )}

              <label className="text-xl" htmlFor="password"> Contraseña: </label>
              <input
                className="rounded-3xl border-2  bg-martinique-input-gray border-martinique-border  text-black shadow-2xl "
                id="password"
                type="password"
                {...register("password", {
                  required: true,
                })}
              />

              {errors.password && (
                <span className="text-red-600  bg-lime-500 inline-block">
                  {" "}
                  La contraseña es requerida{" "}
                </span>
              )}

              <button
                className="text-4xl text-brown-pod-logo-color mt-32 text-stroke"
                type="submit"
              >
                Registrarse
              </button>

              <p className="text-2xl text-center text-brown-pod-logo-color"> Ya sos un usuario existente? <button type="button"> Iniciá sesión! </button>  </p>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
