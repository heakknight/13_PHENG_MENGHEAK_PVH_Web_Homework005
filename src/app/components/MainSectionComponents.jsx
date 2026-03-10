import React from 'react'
import ButtonComponent from './clients/ButtonComponent';
import { BookMarkedIcon, ArrowUpAZ, ArrowDownAZ } from 'lucide-react';
import CardComponent from '../cards/CardComponent';

const MainSectionComponents = () => {
  return (
    <main className=' w-full h-full flex flex-col rounded-t-2xl mr-5 gap-y-2'>
      <div className='flex w-full justify-between'>
        <div>
          <ButtonComponent />
        </div>
        <div className='flex gap-x-5 mr-5'>
          <span className='font-semibold text-white text-[20px]'>
            Your Bookmark  <BookMarkedIcon className='inline-block'/>
          </span>
          <span className='text-white mt-1'>
            <ArrowUpAZ />
          </span>
          <span className='text-white mt-1'>
            <ArrowDownAZ />
          </span>
        </div>
      </div>
      <CardComponent />
    </main>
  )
}

export default MainSectionComponents;
