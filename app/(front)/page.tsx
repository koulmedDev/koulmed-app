'use client'

import DoctorsList from "@/components/DoctorsList";
import Brand1 from "@/components/frontend/Brands";
import Hero from "@/components/frontend/hero";
import MegaMenu from "@/components/frontend/MegaMenu";
import TabbedSection from "@/components/frontend/TabbedSection";
import React from "react";  

 export default function Home() {
  return(
    <section className="">
       <Hero/> 
       <Brand1/>
       <div className="mx-auto max-w-6xl"></div>
       <TabbedSection/>
       <DoctorsList/>
       <DoctorsList className="bg-white-100 py-8 lg:py-24" title="Visite médicale en personne" isInPerson={true}/>
    </section>
  );
 }