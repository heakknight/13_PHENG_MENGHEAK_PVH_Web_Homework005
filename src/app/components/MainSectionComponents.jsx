import React from 'react'
import ProductList from './ProductList'
export default function MainSectionComponents({items}){
  return (
    <main className=' w-full h-full flex flex-col rounded-t-2xl mr-5 gap-y-2'>
      <ProductList items={items} />
    </main>
  )
}