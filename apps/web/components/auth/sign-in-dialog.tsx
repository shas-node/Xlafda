import React from 'react'

import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@workspace/ui/components/dialog'
import { Button } from '@workspace/ui/components/button'
import { DialogTrigger } from '@workspace/ui/components/dialog'
import { GoogleLogoIcon,XLogoIcon } from  '@phosphor-icons/react/dist/ssr'

export default function SignInDialog({ triggerLabel }: { triggerLabel: string }) {
    return (
        <Dialog >
            <DialogTrigger>
                <Button variant='default'>{triggerLabel}</Button>
            </DialogTrigger>

<DialogContent className='sm:max-w-lg rounded-none rounded-t-2xl md:rounded-2xl px-0 pb-0 font-poppins overflow-hidden'>                <DialogHeader className= 'px-6 pt-6 text-left'>
                  <DialogTitle className='tracking-tight font-semibold text-3xl'> Sign in to your account</DialogTitle>
                  <DialogDescription>
                    Access your account and manage your e-lafda 
                </DialogDescription>
                </DialogHeader>
                <div className= 'px-6 py-4'>
                    <div className= 'flex flex-col gap-4'>
                       
                      {/* Google Button */}
    <button className='flex w-full h-12 items-center justify-center gap-3 rounded-md border-2 text-base font-semibold transition-colors hover:bg-secondary'>
      <GoogleLogoIcon weight='bold' className='size-6' />
      <span>Continue with Google</span>
    </button>
    <div className='flex items center gap-3 px-2 text-xl font-semibold text-muted-foreground tracking-tight'>
        <span className='h-px flex-1 bg-border'/>
            or
        <span className='h-px flex-1 bg-border'/>
    </div>

    {/* X Button */}
    <button className='flex w-full h-12 items-center justify-center gap-3 rounded-md border-2 text-base font-semibold transition-colors hover:bg-secondary'>
      <XLogoIcon weight='bold' className='size-6' />
      <span>Continue with X</span>
    </button>
                    </div>
                </div>
                
               <DialogFooter className="mt-2 block border-t border-border/60 px-6 pt-4 text-center text-sm text-muted-foreground">
  By continuing you agree to our{" "}
  <Link 
    className="font-medium text-foreground hover:underline underline-offset-4" 
    href="/terms"
  >
    Terms of service
  </Link>{" "}
  and{" "}
  <Link 
    className="font-medium text-foreground hover:underline underline-offset-4" 
    href="/privacy"
  >
    Privacy policy
  </Link>
</DialogFooter>
            </DialogContent>
        </Dialog>
    )
}