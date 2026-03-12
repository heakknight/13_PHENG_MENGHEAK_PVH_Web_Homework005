"use client"

import React, { useState } from 'react';
import { ArrowUpAZ, ArrowDownAZ } from 'lucide-react';
import YBookMark from './actions/YBookMark';
import ButtonComponent from './actions/ButtonComponent';
import CardComponent from '../cards/CardComponent';

export default function ProductList({items, onClick}) {
  const [originItems, setOriItems] = useState(items);
  const [isSaved, setIsSaved] = useState(false);

  const renderBookmark = (id) => { 
    setOriItems((prev) => 
      prev.map((item) => item.id === id ? { ...item, saved: !item.saved } : item)
    );
  };

  const sortAsc = () => {
    const sorted = [...originItems].sort((a, b) => a.item_name.localeCompare(b.item_name));
    setOriItems(sorted);
  };
  const sortDesc = () => {
    const sorted = [...originItems].sort((a, b) => b.item_name.localeCompare(a.item_name));
    setOriItems(sorted);
  };

  const displayedItems = isSaved 
    ? originItems.filter(item => item.saved === true) 
    : originItems;

  return (
    <>
      <div className='flex w-full justify-between'>
        <div>
          <ButtonComponent onClick={() => setIsSaved(!isSaved)} />
        </div>
        <div className='flex gap-x-5 mr-5 items-center'>
          <YBookMark onClick={() => setIsSaved(!isSaved)} isActive={isSaved}/>
          <span onClick={sortAsc} className='text-white mt-1 cursor-pointer'>
            <ArrowUpAZ />
          </span>
          <span onClick={sortDesc} className='text-white mt-1 cursor-pointer'>
            <ArrowDownAZ/>
          </span>
          
        </div>
      </div>
      
      {displayedItems.map((item) => (
        <CardComponent key={item.id} item={item} onToggle={() => renderBookmark(item.id)} />
      ))}
    </>
  )
}
