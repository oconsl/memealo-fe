import { toast } from 'sonner'
import { IoIosClose } from "react-icons/io"
import Image from 'next/image'

type Props = {
  title: string
  description: string
  achievementNumber: number
  imageURL: string
}

export default function achievement ({ title, description, achievementNumber, imageURL }: Props) {
  const toastId = toast(
    <div className='flex flex-row w-full p-0'>
      <picture className='flex-grow h-full aspect-square self-end'>
        <Image src={imageURL} alt="pepo sad" width={100} height={100} />
      </picture>
      <div className='flex-grow w-full h-full pb-2 px-2'>
        <h3 className='text-2xl font-bold uppercase text-center tracking-tighter'>{title}</h3>
        <p className='text-base text-center leading-tight tracking-tight'>{description}</p>
      </div>
      <span className='bg-gray-200 text-slate-950 absolute top-[-10px] left-[-10px] rounded-full py-[2px] px-1 uppercase font-bold tracking-tighter'>LOGRO DESBLOQUEADO #{achievementNumber}</span>
      <button onClick={() => toast.dismiss(toastId)} className='bg-gray-200 text-slate-950 absolute top-[-10px] right-[-10px] rounded-full p-[2px] text-2xl font-bold'>
        <IoIosClose />
      </button>
    </div>,
    {
      duration: 5000,
      position: 'top-right',
    }
  )
}