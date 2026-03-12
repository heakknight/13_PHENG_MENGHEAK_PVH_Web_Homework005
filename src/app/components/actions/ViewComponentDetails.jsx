"use client"

import React, { useState } from 'react';
import ViewComponent from './ViewComponent';

export default function ViewComponentDetails({item}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ViewComponent onClick={() => setOpen(!open)}>
        View
      </ViewComponent>

      {open && (
        <dialog 
          open 
          className='w-full h-full flex justify-center items-center absolute inset-0
             bg-black/70 rounded-b-md p-5'>
          <div className='w-125 h-50 bg-[#1a222e] rounded-2xl p-5 text-white'>
            <button onClick={() => setOpen(!open)} className='float-end px-3 py-1
              text-white bg-[#11161D] rounded-md cursor-pointer border border-white/13'>
              Close
            </button>
            <h3 className='text-2xl mb-5 font-bold'>[+] Item details</h3>
            <div><b>Id</b>: {item.id}</div>
            <div><b>Name</b>: {item.item_name}</div> 
            <div><b>Price</b>: ${item.item_price}</div>
            <div><b>Description</b>: {item.item_description}</div>
          </div>
        </dialog>
      )}

    </div>
  )
}