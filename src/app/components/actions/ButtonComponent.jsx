"use client"

import React from 'react'

export default function ButtonComponent({ onClick }){
  return (
    <div onClick={onClick} className='bg-white px-2 rounded-3xl'>
      <button className='cursor-pointer'>Back</button>
    </div>
  )
}
