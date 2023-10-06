import React from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router';

export default function Dummy() {
    
    const router = useRouter();

  return (
    
    <div>
        <Navbar />
        <h1 className='text-4xl mt-10 text-center text-red-400 mx-auto'> {router.pathname.substring(1, router.pathname.length)} </h1>
    </div>
  )
}
