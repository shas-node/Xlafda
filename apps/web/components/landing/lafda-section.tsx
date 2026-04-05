import React from 'react'
import Link from 'next/link';
import  Sectionsubheading  from './section-subheading'
import { mockXData } from '@/mock-data/mockdatalafda'
import LafdaCard from '../lafda/lafda-card';
import { cn } from '@workspace/ui/lib/utils'
export default function Lafdasection() {
  const visiblelafda = mockXData.slice(0,4);
  const hasmore = mockXData.length > 4;
  return (
    <section className='py-12 px-4 w-full font-poppins'>
        <Sectionsubheading
        title="Trending e-lafda"
        subtitle= "Discover the latest and most popular e-lafda on the platform"
        />
  
    <div className= {cn(
      "mt-8 grid gap-6",
      "grid cols-1",
      "md: grid-cols-2",
       "lg: grid-cols-2",
        "xl: grid-cols-2"
    )}>
      {visiblelafda.map((card) => (
        <LafdaCard key = {card.id} data= {card}/>    
       )

      )}
    </div>
    {hasmore &&(
      <div className='mt-8 flex justify-center'>
        <Link href = "/lafda">
        <button variant= "outline">Show more E-lafda</button>
        </Link>
      </div>
    )

    }
      </section >
  );
}
