import ProductsCard from '@/app/components/products/productsCard'
import React from 'react'

function Produts({img, name, price}) {
  const products = [
    {
      img: '/bike.jpg',
      name: 'sepeda normal',
      price: '$100',
    },
    {
      img: '/bike1.jpg',
      name: 'sepeda gunung',
      price: '$300',
    },
    {
      img: '/bg3.png',
      name: 'sepeda iseng',
      price: '$345',
    },
    {
      img: '/bike2.jpg',
      name: 'sepeda kantor',
      price: '$100',
    },
    {
      img: '/bike3.jpg',
      name: 'sepeda balap',
      price: '$200',
    },
    {
      img: '/bike4.jpg',
      name: 'sepeda santai',
      price: '$500',
    },
    {
      img: '/bike3.jpg',
      name: 'sepeda balap',
      price: '$200',
    },
    {
      img: '/bike5.jpg',
      name: 'sepeda anak',
      price: '$1000',
    },
    {
      img: '/bike6.jpg',
      name: 'sepeda dewasa',
      price: '$125',
    },
    {
      img: '/bg2.jpg',
      name: 'sepeda butut',
      price: '$10000',
    },
    {
      img: '/bike5.jpg',
      name: 'sepeda anak',
      price: '$1000',
    },
    {
      img: '/bg3.png',
      name: 'sepeda iseng',
      price: '$345',
    },
  ]
  return (
    <div className='mx-auto p-5 my-2 max-w-4xl'>
      <div className=''>
        <h1 className='text-center text-[5vh]'>Our Best Products</h1>
      </div>
      <div className='grid grid-cols-3 gap-3 md:grid-cols-6 justify-around items-center'>
        {products.map(({ img, name, price }) => {
          return <ProductsCard img={img} name={name} price={price} />
        })}
      </div>
    </div>
  )
}

export default Produts;

