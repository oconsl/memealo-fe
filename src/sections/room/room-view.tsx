export default function RoomView() {
    return (
        <div className="flex w-screen h-screen bg-[#2B2C48] m-0 p-0">
            <div className='flex-none w-6/12 h-[120px] absolute top-4 left-[300px] border-solid border-2 border-gray-500' />
            <div className='flex-none w-6/12 h-[180px] absolute top-[160px] left-[300px] border-solid border-2 border-gray-500' />
            <div className='flex-none w-6/12 h-[270px] absolute bottom-4 left-[300px] border-solid border-2 border-gray-500' />
            <div className='flex-none w-36 h-52 m-3 absolute bottom-9 left-16 border-solid border-2 border-gray-500' />
            <div className='flex-none w-[320px] h-24 absolute top-4 right-[30px] border-solid border-2 border-gray-500' />
            <div className='flex-none w-[300px] h-3/4 absolute bottom-9 right-[50px] border-solid border-2 border-gray-500' />
        </div>
    )
}