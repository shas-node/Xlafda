"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import  Sectionsubheading  from './section-subheading'
import { mockXData } from '@/mock-data/mockdatalafda'
import LafdaCard from '../lafda/lafda-card';
import { cn } from '@workspace/ui/lib/utils'
import { Button } from '@workspace/ui/components/button';
export default function Lafdasection() {
  const [visibleCount, setVisibleCount] = useState(4);

const visiblelafda = mockXData.slice(0, visibleCount);
const hasmore = visibleCount < mockXData.length;
  return (
    <section className='py-12 px-4 w-full font-poppins'>
        <Sectionsubheading
        title="Trending e-lafda"
        subtitle= "Discover the latest and most popular e-lafda on the platform"
        />
  
    <div className= {cn(
      "mt-8 grid gap-6",
      "grid-cols-1",
      "md: grid-cols-2",
       "lg: grid-cols-2",
        "xl: grid-cols-2"
    )}>
      {visiblelafda.map((card) => (
        <LafdaCard key = {card.id} data= {card}/>    
       )

      )}
    </div>
   {hasmore && (
  <div className="mt-8 flex justify-center">
    <Button
      variant="outline"
      onClick={() => setVisibleCount((prev) => prev + 4)}
    >
      Show more E-lafda
    </Button>
      </div>
    )
  }
    
      </section >
  );
}
