import MegaMenu from '@/components/frontend/MegaMenu';
import Navbar from '@/components/frontend/Navbar';
import { ReactNode } from 'react';


export default function Layout({children}:{children: ReactNode}) {
  return (
    <div className='bg-gray-50'>
      <Navbar/>
      <div className="max-w-5xl mx-auto py-3 ">
      <MegaMenu/>
      </div>
      {children}
    </div>
  )
}
