'use client'

import { useGameStore } from '@/libs/store'
import Button from '@/components/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LandingView() {
  //Estados de zustand
  const isLogged = useGameStore((state) => state.user.isLogged)
  const { resetUser } = useGameStore()

  const router = useRouter()

  const logOutHandler = () => {
    resetUser()
  }

  const loginHandler = () => {
    router.push('/login')
  }

  const createRoomHandler = () => {
    router.push('/room/create')
  }

  const joinRoomHandler = () => {
    router.push('/room/join')
  }

  const registerHandler = () => {
    router.push('/register')
  }

  return (
    <>
      <header className=" bg-martinique-900 h-[10vh] w-full">
        <div className="flex flex-row items-center justify-end gap-8 p-4">
          {isLogged ? (
            <div>
              <button className="text-brown-pod-300" onClick={logOutHandler}>
                cerrar sesion
              </button>
            </div>
          ) : (
            <div>
              <Button message={'iniciar sesión'} onClick={loginHandler} />
            </div>
          )}
        </div>
      </header>

      <main className="bg-martinique-900 w-full h-[80vh]  relative">
        <div className=" w-fit  -rotate-12 fixed left-16 top-16 z-[2]">
          <h1 className="text-brown-pod-200 title-shadow stroke text-[8rem]">
            MEMEALO!
          </h1>
        </div>

        <div className=" w-[20%] rotate-[145deg] fixed -left-[6%] -top-4 z-[1]">
          <Image
            src="/memes/yao-ming.webp"
            alt="yao ming"
            width={250}
            height={250}
            className="w-fit"
          />
        </div>

        <div className=" w-[10%] rotate-180 fixed right-[47%] -top-14">
          <Image
            src="/memes/sponge-bob.webp"
            alt="sponge bob happy"
            width={250}
            height={250}
            className="w-fit"
          />
        </div>

        <div className=" w-[5%] fixed right-[2%] bottom-[5vh] z-[1]">
          <Image
            width={150}
            height={150}
            className="w-fit"
            src="/memes/keanu-sad.webp"
            alt="keanu reeves sad"
          />
        </div>

        <div className=" w-[250px] min-w[250px] fixed right-32 bottom-[18rem] z-[0]">
          <Image
            width={150}
            height={150}
            className="w-fit"
            src="/memes/pepo-pikachu.webp"
            alt="pepo and pikachu"
          />
        </div>

        <div className=" w-[45px] fixed bottom-0 right-[3%] z-[1]">
          <Image
            width={150}
            height={150}
            className="w-fit"
            src="/memes/cheems.webp"
            alt="cheems sad"
          />
        </div>

        <div className="  w-[40%] h-[50%] fixed  bottom-[11%] z-[0] left-[10%]">
          <div className="absolute -left-[15%] bottom-0 w-[35%] -rotate-[0] z-[10]">
            <Image
              width={150}
              height={150}
              className="w-fit"
              src="/landing-image/will-is-mid.png"
              alt="hard choice"
            />
          </div>
          <div className="absolute border-[5px] rounded-[3%] left-[0] w-[25%] -rotate-[15deg] z-[1]">
            <Image
              width={150}
              height={150}
              className="w-fit"
              src="/landing-image/hard-choice.webp"
              alt="hard choice"
            />
          </div>
          <div className="absolute border-[5px] rounded-[3%] left-[27%] w-[35%] rotate-[15deg] z-[0]">
            <Image
              width={150}
              height={150}
              className="w-fit"
              src="/landing-image/who-is-spiderman.webp"
              alt="who is spiderman"
            />
          </div>
          <div className="absolute border-[5px] rounded-[3%] left-[58%] w-[34%] rotate-[3deg] z-0">
            <Image
              width={150}
              height={150}
              className="w-fit"
              src="/landing-image/wasted.webp"
              alt="wasted"
            />
          </div>

          <div className="absolute border-[5px] rounded-[3%] left-[10%] bottom-7 w-[55%] -rotate-[10deg] z-[3]">
            <Image
              width={150}
              height={150}
              className="w-full"
              src="/landing-image/this-is-fine.png"
              alt="this is fine"
            />
          </div>
          <div className="absolute border-[7px] rounded-[3%] right-0 bottom-6 w-[34%] -rotate-[10deg] z-[2]">
            <Image
              width={150}
              height={150}
              className="w-full"
              src="/landing-image/tom.png"
              alt="tom"
            />
          </div>
        </div>

        {isLogged ? (
          <div className=" flex flex-col gap-3 fixed right-32 bottom-[10rem] ">
            <span className="text-brown-pod-200 title-shadow landing-stroke text-4xl rotate-12 relative left-[75%] top-6 w-fit">
              memealo!
            </span>

            <div>
              <Button
                message={'crear Sala'}
                divClasses="w-[15%] min-w-[250px] h-[]"
                buttonClasses="w-full h-full text-3xl"
                onClick={createRoomHandler}
              />
            </div>
            <div>
              <Button
                message={'unirse a sala'}
                divClasses="w-[15%] min-w-[250px] h-[]"
                buttonClasses="w-full h-full text-3xl"
                onClick={joinRoomHandler}
              />
            </div>
          </div>
        ) : (
          <div className=" flex flex-col gap-3 fixed right-32 bottom-[14.5rem] ">
            <Button
              message={'registrarse'}
              divClasses="w-[15%] min-w-[250px] h-[]"
              buttonClasses="w-full h-full text-3xl"
              onClick={registerHandler}
            />
          </div>
        )}
      </main>

      <footer className="w-full h-[10vh] flex flex-col absolute">
        <div className="w-full h-[20%] bg-astral-500"> </div>

        <div className="bg-martinique-600 absolute right-[5%] bottom-0 px-2 py-1 rounded-xl h-[100%] max-h-[70px]">
          <div className="bg-astral-300 rounded-lg p-2 h-[100%] flex flex-col gap-[1px] sm:flex-grow">
            <p className="text-s sm:text-s lg:text-l  text-martinique-800">
              NUESTRA COMUNIDAD
            </p>
            <div className="bg-martinique-800 rounded-lg w-5 p-1 ">
              <Image
                width={250}
                height={250}
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
