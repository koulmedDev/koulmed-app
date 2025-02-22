import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-lg rounded-md">
     <div className="py-6 px-8">
        <div className="flex items-center justify-between">
            <div className="">
            <div className="flex flex-col">
            <h2>Docteur, Gilbert Mahyi</h2>
            <p>Généraliste
            </p>
        </div>
            <p>Consultation à domicile</p>
            <p>Avedji ,Limousine 2357</p>
            </div>
            <Image src="/doc-profile.jpg"
         width={417} 
         height={626}
          alt="Doctor"
           className='w-36 h-36 rounded-full object-cover'/>
        </div>
      </div>
    </div>
    </div>
  )
}
