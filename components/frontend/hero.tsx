import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TransitionText from "./TransitionText";
import TransitionalText from "./TransitionText";
import { Pill } from "lucide-react";
{/* ACCUEIL DE KOULMED */}
const Hero = () => {
     const TEXTS = [
        "Médecin général",
        "Pédiatre",
        "Gynécologe",
        "Obstétricien",
        "Cardiologue",
        "Dermatologue",
        "Endocrinologie",
        "Neurologue",
        "Rhumatologue",
        "Pneumologue",
        "Chirurgien",
        "Ophtalmologe",
        "ORL",
        "Psychiatre",
        "Psychologe",
        "Kinésithérapeute",
        "Dentiste",
        "Pharmacien",
        "Parapharmacien",
      ];
  return (
     <div className="bg-lime-600">
         <div className="relative  pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px] max-w-6xl mx-auto">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-gray-50 dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl flex flex-wrap items-center gap-3">
                 <span>Réservez votre</span>{" "} <TransitionalText className="text-blue-700" TEXTS={TEXTS}/> <br />  <span>dès maintenant</span>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-gray-100 dark:text-dark-6">
                La santé ne devrait pas être un casse-tête, nous éliminons les longues procédures pour vous offrir des soins de santé simples, abordables et transparents. Koulmed votre Hôpital en Main
                </p>
                {/* BARRE DE RECHERCHE ET BOUTON CTA: CALL TO ACTION */}
                  <SearchBar/>
                <ul className="flex flex-wrap items-center justify-between w-full gap-4 mt-6">
                  <li className="flex-1">
                    <a
                      href="/#"
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                    >
                      J'AI BESOIN URGEMMENT D'UN DOCTEUR
                    </a>
                  </li>
                  <li className="flex-1">
                    <a
                      href="/#"
                      className="inline-flex w-full items-center justify-center rounded-md bg-gray-50 px-5 py-3 text-center text-base font-medium text-blue-700 hover:text-blue-700 dark:text-white"
                    >
                      <span className="mr-2">
                        <Pill className="flex-shrink-0 h-5 w-5  "/>
                         
                      </span>
                      J'AI BESOIN D'UNE CONSULTATION  MEDICALE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src=" https://img.freepik.com/photos-gratuite/portrait-chirurgienne-afro-americaine-heureuse-debout-dans-salle-operation-prete-travailler-patient-travailleuse-medicale-uniforme-chirurgical-salle-operation_657921-38.jpg?uid=R103172959&ga=GA1.1.1509899582.1739266863&semt=ais_hybrid"
                    alt="hero"
                    className="max-w-full rounded-3xl lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>

  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }:{href:string, imgSrc:string}) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

 

 
