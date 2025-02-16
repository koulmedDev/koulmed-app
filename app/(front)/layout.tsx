import Navbar from '@/components/frontend/Navbar';
import { ReactNode } from 'react';


export default function Layout({children}:{children: ReactNode}) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}
