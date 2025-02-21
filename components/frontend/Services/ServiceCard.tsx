import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { ServiceProps } from '@/types/types';

export default function ServiceCard({service}:{service:ServiceProps}) {
  return (
    <Link href= {`/services/${service.slug}`} className='rounded-md bg-lime-100 hover:bg-lime-600 duration-300 flex gap-4 overflow-hidden '>
      <Image src={service.image} width={1170} height={848} alt= {service.title} className="w-1/3 object-cover aspect-video"/> 
       <div className="flex flex-col w-2/3 py-4">
        <h2>{service.title}</h2>
        <p claasName="text-[0.6rem]">936 Docteurs Disponible</p>
       </div>
       </Link>
  );
}
