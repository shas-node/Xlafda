import { Button } from '@workspace/ui/components/button';
import SignInDialog from '../auth/sign-in-dialog';
import React from 'react'
export default function NewElafda() {
    const signedIn = false;
    if (signedIn) {
        return (
            <div>
               
                <Button>Create new e-lafda</Button>
            </div>
        )
    } else {
        return (
            <SignInDialog triggerLabel = "create new e-lafda" />
        )
    }
}