import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Stethoscope, Video } from 'lucide-react';

export default function DoctorCard({isInPerson=false}:{isInPerson?:boolean}) {
      
    const timeStamps = [
        {
            time:"8:30",
        },
        {
            time:"9:30",
        },
        {
            time:"10:30",
        },
        {
            time:"11:30",
        },
        {
            time:"12:30",
        },
        {
            time:"13:30",
        },
        {
            time:"14:30",
        },
    ];

  return (
    <div  className="border border-gray-200 bg-white inline-flex flex-col  py-8 px-3 rounded-md hover:border-lime-600 duration-300 transition-all">
      <Link href="/doctors/slug">
      <h2 className='uppercase font-bold text-2xl tracking-widest'>Emmanuel EKLOU</h2>
      {isInPerson && <p className='py-3'>3675 Parck des princes, institut gouete</p>}
      
      <div className="flex items-center gap-4 py-4">
        <div className="relative">
        <Image src="/doc-profile.jpg" width={417} height={626} alt="Doctor" className='w-24 h-24 rounded-full object-cover'/>
        {!isInPerson && (<p className='absolute bottom-0 right-2 bg-blue-200 text-blue-700 w-10 h-10 flex items-center justify-center rounded-full'><Video className='w-6 h-6'/>
            </p>)}
        </div>
        <div className="flex flex-col gap-2" >
           <p className='flex-items-center'>
            <Stethoscope className='w-4 h-4 mr-2 flex-shrink-0'/>
            <span>Famille Medecine</span>
           </p>
           <p className="bg-lime-300 py-3 px-6 uppercase ">
            Disponible aujourd'hui
           </p>
        </div>
      </div>
      </Link>
      <div className="pt-6 border-t border-gray-400">
        <h3 className='flex gap-4 justify-between items-center'> <span className='text-gray-600'>Jeudi, 17 Mars 2026</span>  <span className='font-bold '>23.800CFA</span>
        </h3>
        <div className="py-3 grid grid-cols-3 gap-2">
            {
                timeStamps.slice(0,5).map((item,i)=>{
                    return <Link className="bg-blue-700 text-sm  text-white p-2 text-center" key={i} href="#">{item.time}</Link>
                })
            
            }
            <Link className="text-[0.7rem] bg-lime-600 text-white py-2 px-3 truncate" href="/doctors/slug">Plus d'heures</Link>
          </div>
      </div>
    </div>
  )
}
