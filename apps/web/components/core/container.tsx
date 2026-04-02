import React from 'react'
import { cn } from '@workspace/ui/lib/utils'

export default function Container({children, className}: {children: React.ReactNode, className: string}) {   
    return (
       <div className= {cn("mx-auto max-w-5xl container",className)}>
           {children}
        </div>
    )
}