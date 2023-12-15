/* eslint-disable @next/next/no-img-element */
export default function PlayerList() {
  const array = [
    '/profile-icon.png',
    '/profile-icon.png',
    '/profile-icon.png',
    '/profile-icon.png',
    '/profile-icon.png',
    '/profile-icon.png',
    '/profile-icon.png',
    '/profile-icon.png'
  ]

  return (
    <section className="w-[50%] h-32 p-4 ">
      <div className="w-full h-full flex items-center justify-center">
        {array.map((icon, i) => (
          <div
            key={i}
            className={`h-full flex ${
              i % 2 === 0 ? 'items-start' : ' items-end'
            }`}
          >
            <div className="border-4 border-violet-600 rounded-full">
              <div className="w-12 h-12 flex">
                <img src={icon} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
