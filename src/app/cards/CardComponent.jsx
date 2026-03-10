import React from 'react';
import Image from 'next/image';

const CardComponent = () => {
  return (
    <div className='w-[99%] bg-[#0d1117] h-1/8 ml-3 mr-5 rounded-lg border border-[#1c1f23] text-white p-3
                    flex gap-10'>
      <div className='bg-amber-200 w-1/2 h-full'>
        <img src="/profile.png" width={50}/>
      </div>
      <div className='bg-blue-500 w-1/2 h-full'>
        Button
      </div>
    </div>
  )
}

export default CardComponent;