"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const megaMenu = [
    {
        /* MEGAMENU -----------------------------------------------1--------- */
        title: "Top Réservé",
        services:[
            {
                title:"Consultation à domicile",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Prescription d'ordonnance",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Assistqnce Infections urinaire",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Télésanté",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Assistance aux personnes handicapés",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
        ],
    },
    {
        /* MEGAMENU -----------------------------------------------2--------- */
        title: "Personnels de santé",
        services:[
            {
                title:"Consultation à domicile",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Prescription d'ordonnance",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Assistance Infections urinaire",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Télésanté",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Assistance aux personnes handicapés",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
        ],
    },
    {
        /* MEGAMENU -----------------------------------------------3--------- */
        title: "Spécialités",
        services:[
            {
                title:"Consultation à domicile",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Prescription d'ordonnance",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Assistqnce Infections urinaire",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Télésanté",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Assistance aux personnes handicapés",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
        ],
    },
    {
        /* MEGAMENU -----------------------------------------------4--------- */
        title: "Symptoms",
        services:[
            {
                title:"Consultation à domicile",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Prescription d'ordonnance",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Assistqnce Infections urinaire",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Télésanté",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
            {
                title:"Assistance aux personnes handicapés",
                slug:"tele-sante",
                description: "lorem ipsum dolor sit amet consectetur adipiscing elit. tque, nulla dolores reprehenderit, ipsum repellat natus nihil facilis quibusdam, rem laudantium nesciunt"
            },
        ],
    },
]
export default function MegaMenu() {
  return (
    <NavigationMenu className="bg-white">
      <NavigationMenuList className="space-x-4"> 
        {
            megaMenu.map((item,i)=>{
                return(
                    <NavigationMenuItem  key={i}>
                    <NavigationMenuTrigger className="bg-white text-gray-950">{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.services.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={`/services${component.slug}`}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
            })
        }   
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
