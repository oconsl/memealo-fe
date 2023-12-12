export default function AlbumComp({ children }: any) {
  return (
    <section className='p-1 my-5 border border-solid rounded-lg border-album_view-1'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5 p-5 max-w-full max-h-full rounded-lg bg-album_view-3 place-items-center'>
        {children}
      </div>
    </section>
  )
}
