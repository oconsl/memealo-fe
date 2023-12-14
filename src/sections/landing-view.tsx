/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Button from '@/components/button'
import loginImage from '@/assets/images/login.webp'
const LandingView = () => {
  return (
    <>
      <header className="border border-yellow-900 bg-martinique-900 h-[10vh] w-full">
        <div className="flex flex-row items-center justify-end gap-8 p-4">
          <div>
            <button className="text-brown-pod-300">cerrar sesion</button>
          </div>
          <div>
            <Button message={'iniciar sesión'} />
          </div>
        </div>
      </header>

      <main className="bg-martinique-900 w-full h-[80vh] border border-yellow-400 relative">
        <div className="border w-fit border-red-500 -rotate-12 fixed left-16 top-16 z-[2]">
          <h1 className="text-brown-pod-200 title-shadow stroke text-9xl">
            MEMEALO!
          </h1>
        </div>

        <div className="border border-yellow-600 w-[20%] rotate-[145deg] fixed -left-[6%] -top-4 z-[1]">
          <img className="w-fit" src="memes/yao-ming.webp" alt="yao ming" />
        </div>

        <div className="border border-red-600 w-[10%] rotate-180 fixed right-[47%] -top-14">
          <img className="w-fit" src="memes/sponge-bob.webp" alt="sponge bob happy" />
        </div>

        <div className="border border-red-600 w-[5%] fixed right-[2%] bottom-[5vh] z-[1]">
          <img
            className="w-fit"
            src="memes/keanu-sad.webp"
            alt="keanu reeves sad"
          />
        </div>

        <div className="border border-red-600 w-[250px] min-w[250px] fixed right-32 bottom-[18rem] z-[0]">
          <img className="w-fit" src="memes/pepo-pikachu.webp" alt="pepo and pikachu" />
        </div>

        <div className='border border-red-600 w-[5%] fixed bottom-0 z-[1]'>
          <img className='w-fit' src="memes/cheems.webp" alt="cheems sad" />
        </div>

        <div className="border border-blue-500 flex flex-col gap-3 fixed right-32 bottom-[10rem] ">
          <span className="text-brown-pod-200 title-shadow landing-stroke text-4xl rotate-12 relative left-[75%] top-6 w-fit">
            memealo!
          </span>

          <div>
            <Button
              message={'crear Sala'}
              divClasses="w-[15%] min-w-[250px] h-[]"
              buttonClasses="w-full h-full text-3xl"
            />
          </div>
          <div>
            <Button
              message={'unirse a sala'}
              divClasses="w-[15%] min-w-[250px] h-[]"
              buttonClasses="w-full h-full text-3xl"
            />
          </div>
        </div>
      </main>

      <footer className="w-full h-[10vh] flex flex-col absolute">
        <div className="w-full h-[20%] bg-astral-500"> </div>

        <div className="bg-martinique-600 absolute right-[5%] bottom-0 px-2 py-1 rounded-xl h-[100%] max-h-[70px]">
          <div className="bg-astral-300 rounded-lg p-2 h-[100%] flex flex-col gap-[1px] sm:flex-grow">
            <p className="text-s sm:text-s lg:text-l  text-martinique-800">
              NUESTRA COMUNIDAD
            </p>
            <div className="bg-martinique-800 rounded-lg w-5 p-1 ">
              <img
                className="w-2 xl:w-[400px]"
                src="/assets/discord-mark-white.svg"
                alt="Discord url"
              />
            </div>
          </div>
        </div>

        <ul className="w-full h-[80%] bg-astral-400 flex items-center justify-center gap-3 text-white text-xl">
          <li>Terminos y servicios</li>
          <li>|</li>
          <li>Privacidad</li>
        </ul>
      </footer>
    </>
  )
}

export default LandingView
