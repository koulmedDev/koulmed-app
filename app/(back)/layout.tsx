 import React from 'react'
 
 export default function Layout({children}:{children: ReactNode}) {
   return (
     <div>
       <h2>Iam Dashboard only Pages Layout</h2>
       {children}
     </div>
   )
 }
 