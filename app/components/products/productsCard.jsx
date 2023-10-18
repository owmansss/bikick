import Image from "next/image"

function ProductsCard({name, img, price, id}) {
  return (
    <div className='grid mx-auto shadow-lg shadow-slate-200 rounded-xl p-1' key={id}>
      <Image
      key={id}
        src={img}
        width={1000}
        height={1000}
        alt={name}
        className='aspect-video object-cover object-center rounded-xl hover:aspect-square duration-500 md:aspect-square'
      />
      <div className='flex justify-between my-5'>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
      <a
        href='#'
        className='bg-[#FFB000] hover:bg-[#FFD93D] duration-300 min-w-1/3 rounded-2xl text-center p-1 hover:text-white '
      >
        Buy Now
      </a>
    </div>
  )
}

export default ProductsCard
