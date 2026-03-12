import React from 'react'
import SearchComponent from './actions/SearchComponent';
import Image from 'next/image';

const NavbarComponents = () => {
  return (
    <nav className='bg-[#11161D] w-full h-[8%] flex text-white justify-between items-center px-5'>
      <div>
        <Image src="/profile.png" alt="" className='w-12 h-12 bg-amber-50 inline-block mr-3 rounded-[50%]' width={50} height={50}/>
        <span>Dashboard</span>
      </div>
      <div>
        <SearchComponent/>
      </div>
    </nav>
  )
}

export default NavbarComponents
