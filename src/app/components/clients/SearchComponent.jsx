"use client"

import React from 'react'

const SearchComponent = () => {
  return (
    <div className='bg-[#1c2229] p-2 rounded-[10px] border border-[#30363f]'>
      <input type="text" placeholder='Search by item name...' 
        className='px-1 pr-8outline-none focus:outline-none bg-transparent pr-10'/>
    </div>
  )
}

export default SearchComponent;