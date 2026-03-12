"use client"

import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';

export default function BookmarkMarkCompoent({isSaved,onClick}) {
  return (
    <button onClick={onClick} className='cursor-pointer'>
      <Bookmark fill={`${isSaved ? 'yellow':''}`}/>
    </button>
  )
}