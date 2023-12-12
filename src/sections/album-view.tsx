import AlbumComp from '@/components/album'
import CardLore from '@/components/lore-card'

export default function AlbumView() {
  const cardLore =
    'Rickrolling is a bait-and-switch prank that involves posting a hyperlink that is supposedly relevant to the topic at hand in an online discussion, but re-directs the viewer to the music video of "Never Gonna Give You Up"'

  return (
    <>
      <main className='m-12 items-center justify-center'>
        <section className='p-5 rounded-lg bg-album_view-1'>UserData</section>
        <AlbumComp>
          <CardLore
            id={1}
            name='Rickroll'
            cardLore={`${cardLore}`}
            cardNumber={1}
            imageUrl='/memes/rickroll.webp'
            type='Pop Culture Reference'
          />
        </AlbumComp>
      </main>
    </>
  )
}
