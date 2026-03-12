import React from 'react'

const SidebarComponent = () => {
  return (
    <aside className='bg-[#11161D] w-1/6 h-full rounded-t-2xl p-4 text-white cursor-pointer ml-4'>
      <span className='text-sm'>Menu</span>
      <div className='flex flex-col gap-2'>
        <a className='bg-[#1C2128] p-2 mt-5 rounded-lg'>Overview</a>
        <a className='bg-[#1C2128] p-2 rounded-lg'>Items</a>
        <a className='bg-[#1C2128] p-2 rounded-lg'>Orders</a>
        <a className='bg-[#1C2128] p-2 rounded-lg'>Customers</a>
        <a className='bg-[#1C2128] p-2 rounded-lg'>Settings</a>
      </div>
    </aside>
  )
}

export default SidebarComponent