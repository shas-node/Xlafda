import React from 'react'
import Container from './container'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import NewElafda from './new-elafda'
const navItems = [
    {
        label: 'e-lafda',
        href: '/e-lafda'
    },
    {
        label: 'Engagement Farmers',
        href: '/engagement-farmers'
    },
    {
        label: 'Lists',
        href: '/lists'
    },
    {
        label: 'Polls',
        href: '/polls'
    },
]
export default function Navbar() {
    return (
       <Container className= 'py-4 px-4 font-poppins'>
        <div className='flex justify-between items-center'>
            <div className='flex items-baseline gap-4'> 
                <Image className='size-10' src='/elafda.svg' alt='x-lafda' width={100} height={100} />
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                       <span className='text-sm font-medium text-gray-500 hover:text-gray-700'>{item.label}</span>
                    </Link>
                ))}
            </div>
            <div className='flex items-center gap-4'>
                <NewElafda />
                <ThemeToggle />
            </div>
        </div>
       </Container>
    )
}