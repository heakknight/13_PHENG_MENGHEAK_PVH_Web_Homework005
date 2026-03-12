import React from 'react'
import { BookMarkedIcon } from 'lucide-react'

export default function YBookMark({ onClick, isActive }) {
  return (
    <button onClick={onClick}>
       <span className='font-semibold text-white text-[20px] cursor-pointer'>
          Your Bookmark <BookMarkedIcon className='inline-block'/>
       </span>
    </button> 
  )
}
