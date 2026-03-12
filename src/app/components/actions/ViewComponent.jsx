"use client"

import React from 'react'

export default function ViewComponent({children,onClick})  {
  return (
    <button onClick={onClick} className='bg-[#25213E] text-white px-5 py-1 rounded-md w-15 h-10 flex justify-center items-center cursor-pointer'>
      {children}
    </button>
  )
}