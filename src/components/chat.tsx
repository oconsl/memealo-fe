/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import { Squada_One } from 'next/font/google'

const squada = Squada_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--squada-one'
})

export default function Chat() {
  const [message, setMessage] = useState('')
  //esto es solo de prueba por eso no tiene ts
  const [messages, setMessages] = useState([
    { user: 'Ramiro', message: 'hola' },
    { user: 'Santi', message: 'hola ramiro' },
    { user: 'Santi', message: 'hola ramiro' },
    { user: 'Santi', message: 'hola ramiro' },
    { user: 'Santi', message: 'hola ramiro' },
    { user: 'Santi', message: 'hola ramiro' },
    { user: 'Santi', message: 'hola ramiro' },
    { user: 'Santi', message: 'hola ramiro' },
    { user: 'Santi', message: 'hola ramiro' },
    { user: 'Santi', message: 'hola ramiro' }
  ])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (message.trim() === '') return setMessage('')
    if (message.length > 250)
      return alert('no se pueden enviar mas de 250 caracteres')

    //esto es solo de prueba por eso no tiene ts
    const newMessage = {
      user: 'Me',
      message: message.trim()
    }

    setMessages([...messages, newMessage])

    setMessage('')
  }

  return (
    <section className=" rounded-3xl h-[80%] w-full text-xs md:text-base md:w-[40%] lg:w-[30%] xl:text-lg xl:w-[25%] 2xl:w-[20%] pt-0 border-2 border-blue-300 py-3">
      <div className="h-full py-3 pt-2 px-1">
        <div className="w-full mb-4 justify-center items-center flex h-[5%] leading-10">
          <h1
            className={`${squada.variable} font-squada text-6xl text-chat-memechat z-50 text-stroke`}
          >
            MEMECHAT
          </h1>
        </div>
        <div className="rounded-3xl w-full bg-chat-main flex items-end justify-center p-4 overflow-hidden h-[95%]">
          <div className="w-full h-auto mb-10">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`${
                  message.user === 'Me' ? 'justify-end' : ''
                } flex m-1`}
              >
                <div className=" bg-chat-bubble rounded-3xl p-1.5 flex flex-row items-start max-w-[80%] my-3 min-h-fit relative shadow-lg shadow-black/40">
                  <div className=" bg-black rounded-full h-11 w-11 mr-2 translate-x-[-15px] translate-y-[-20px] absolute border-2 border-violet-700">
                    <img
                      src="/profile-icon.png"
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                  <div
                    className={`${squada.variable} font-squada h-full items-center flex`}
                  >
                    <p className="whitespace-pre-line break-words ml-8 mr-1">
                      <span className=" font-medium">{message.user}:</span>{' '}
                      <span className=" font-medium">{message.message}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center absolute w-80 items-center"
          >
            <div className=" bg-black rounded-full h-14 w-14 mr-2 left-0 absolute border-2 border-violet-700">
              <img src="/profile-icon.png" alt="" className="h-full w-full" />
            </div>
            <input
              type="text"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              className="h-10 rounded-l-full border-2 border-r-0 border-slate-800 focus:border-martinique-600 focus:outline-none pl-14 w-60 md:w-72 bg-slate-300"
            />
            <button className="h-10 w-10 bg-coral-red-200 rounded-r-full border-2 border-l-0 border-slate-800 ">
              <img src="/send.svg" alt="" className="h-full w-full" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
