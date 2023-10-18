import ProductsCard from '@/app/components/products/productsCard'
import { products } from '@/app/constant';
import React from 'react'

function Produts() {
  return (
    <section className='mx-auto p-5 my-2 max-w-4xl'>
      <div className=''>
        <h1 className='text-center text-[5vh]'>Our Best Products</h1>
      </div>
      <div className='grid grid-cols-3 gap-3 md:grid-cols-5 justify-around items-center'>
        {products.map(({ img, name, price, id }) => {
          return <ProductsCard img={img} name={name} price={price} key={id} />
        })}
      </div>
    </section>
  )
}

export default Produts;

