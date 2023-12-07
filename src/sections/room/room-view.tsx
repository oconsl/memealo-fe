export default function RoomView() {
    return (
        <div className="flex relative w-screen h-screen bg-[#2B2C48] m-0 p-0">
            <div className='flex-none w-5/12 h-[10vh] absolute top-[3vh] left-[2vw] md:w-4/12 md:h-[15vh] md:top-[8vh] md:left-1/2 md:translate-x-[-50%] border-solid border-2 border-gray-500 text-gray-500'>Players</div>
            <div className='flex-none w-8/12 h-[30vh] absolute top-[22vh] left-1/2 translate-x-[-50%] md:w-4/12 md:h-[27vh] md:top-[26vh] border-solid border-2 border-gray-500 text-gray-500'>Text</div>
            <div className='flex-none w-8/12 h-[34vh] absolute bottom-[5vh] right-[3vw] md:w-6/12 md:h-[40vh] md:bottom-[3vh] md:left-1/2 md:translate-x-[-50%] border-solid border-2 border-gray-500 text-gray-500'>Cards</div>
            <div className='flex-none w-[27vw] h-[12vh] absolute bottom-[24vh] left-[1vw] md:w-[22vw] md:h-[17vh] md:m-3 md:bottom-[26vh] border-solid border-2 border-gray-500 text-gray-500'>Special Cards</div>
            <div className='flex-none w-[16vw] h-[16vh] absolute bottom-[5vh] left-[7vw] md:w-[9vw] md:h-[22vh] md:m-3 md:bottom-[1vh] md:left-[7vw] border-solid border-2 border-gray-500 text-gray-500'>Deck</div>
            <div className='flex-none w-4/12 h-[10vh] absolute top-[3vh] right-[2vw] md:w-[22vw] md:h-[15vh] md:top-[2vw] md:right-[1vw] border-solid border-2 border-gray-500 text-gray-500'>Achievement</div>
            <div className='flex-none w-[10vw] h-[10vh] absolute top-[45vh] right-[1vw] md:w-[22vw] md:h-3/4 md:bottom-[2vh] md:right-[1vw] md:top-auto md:text-[15px] border-solid border-2 border-gray-500 text-gray-500 text-[8px]'>Mobile Button Chat/ Chat</div>
        </div>

    )
}