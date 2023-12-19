"use client"

import { useState } from 'react'

const properties = {
    name: "DanielLuna023",
    division: "Oro II",
    obtainedCards: "34",
}



export default function ProfileView () {
    const [open, setOpen] = useState(false)
  
    return (
        <section className=" max-w-full min-h-screen bg-martinique-950 pt-10 flex flex-col items-center text-martinique-50" >
            <div className="w-10/12 h-fit flex flex-col items-center">
                <h1 className="text-8xl">Perfil</h1>
                <div className="border-martinique-100 border-4 rounded-lg  w-full h-full shadow-martinique-200 shadow-box flex flex-col gap-3 p-7 text-3xl mb-5" >
                    
                    <div className="rounded-lg w-full h-full flex flex-row gap-3 text-5xl" >

                        <img className="border-martinique-800 border-4 rounded-full w-2/12 aspect-square" src="https://pbs.twimg.com/profile_images/1211831363839647744/cEbVQ4qw_400x400.jpg" alt="User Image" />

                        <div className="bg-martinique-700 rounded-lg  w-5/12 min-h-fit flex flex-col items-center justify-center gap-3">
                            <h2>Usuario:</h2>
                            <p>{properties.name}</p>
                        </div>

                        <div className="bg-martinique-700 rounded-lg w-5/12 min-h-fit flex flex-col items-center justify-center gap-3">
                            <h2>Clasificacion:</h2>
                            <p className="">{properties.division}</p>
                        </div>
                    </div>

                    <div className="bg-martinique-700 rounded-lg w-full h-fit p-5" >
                        <p>Ultimas Cartas Conseguidas</p>
                        
                    </div>

                    <div id='menu' className={`${open && 'h-[700px]'} bg-martinique-700 rounded-lg w-full h-fit p-5 flex  item-start justify-between gap-3 transition-all`}>
                        <p>Cartas Obtenidas: {properties.obtainedCards}</p>
                        <button onClick={() => setOpen(!open)} className={`${open && 'bg-up-arrow'} bg-down-arrow w-5 h-5 bg-cover transition-all` }>
                        </button>
                    </div>

                    <div className="flex flex-row items-center gap-3 justify-end">
                        <button className="bg-coral-red-500 rounded-lg p-2 hover:bg-coral-red-400">
                            Cambiar Avatar
                        </button>
                        <button className="bg-coral-red-500 rounded-lg p-2 hover:bg-coral-red-400">
                            Cambiar Fondo
                        </button>
                        <button className="bg-coral-red-500 rounded-lg p-2 hover:bg-coral-red-400">
                            Cambiar Marco
                        </button>
                    </div>
                </div>
            </div>
        </section>
        
    )
}