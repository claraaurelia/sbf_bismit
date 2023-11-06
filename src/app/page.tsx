import Image from 'next/image'

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className='w-full h-20 bg-white flex drop shadow'>
        <button className='ml-80 my-7 text font cursor-pointer'>Homepage</button>
      </nav>
      
      <p className='text-2x1 font-bold cursor-pointer'> Clara Aurelia Setiady </p>

    </main>
  )
}
