function Hero() {
  return (
    <section id='hero' className='grid gap-3 mx-auto'>
      <div className='grid text-[#352F44] leading-tight mb-10'>
        <h1 className='mb-3 font-semibold text-[5vh] text-center'>
          Ride with Purposes!
        </h1>
        <p className='leading-relaxed text-center font-[Poppins] text-lg'>
          Be healthy and more productive by riding bycicle.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
          asperiores?
        </p>
        <br />
        <button className='shadow-xl bg-[#FFB000] hover:bg-[#FFD93D] rounded-xl w-[12vh] h-[3vh] xl:w-[30vh] xl:h-[5vh] text-white place-self-center'>
          Learn more
        </button>
      </div>
      <div className='grid md:grid-cols-2 gap-3 max-w-4xl mx-auto p-2'>
        <div className=''>
          <img
            src='/bike3.jpg'
            alt='logo'
            className='rounded-xl aspect-video md:aspect-auto 2xl:aspect-square object-cover '
          />
        </div>
        <div className='grid gap-3 items-stretch'>
          <img
            src='bg1.jpg'
            alt='bg2'
            className='rounded-xl object-cover xl:aspect-[9/3]'
          />
          <img
            src='bg2.jpg'
            alt='bg3'
            className='rounded-xl object-cover xl:aspect-[9/3]'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
