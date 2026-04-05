
import React from 'react'

interface SectionSubheadingprops {
    title: string,
    subtitle: string

}
export default function Sectionsubheading({title,subtitle}: SectionSubheadingprops) {
  return ( 
  <div>
   <h2 className='text-2xl font-black text-muted-foreground'>{title} </h2>
   <p>{subtitle}</p>
   </div>
  );
}
