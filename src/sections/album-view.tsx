import AlbumComp from '@/components/album'

export default function AlbumView() {
  return (
    <>
      <main className='grid-rows-2 p-5 h-screen'>
        <section className='p-5 mx-10 rounded-lg bg-album_view-1'>
          UserData
        </section>
        <AlbumComp />
      </main>
    </>
  )
}
