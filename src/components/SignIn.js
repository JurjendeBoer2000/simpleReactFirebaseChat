import React from 'react'
import Button from '@mui/material/Button';
import {signInWithGoogle} from '../firebase'


function SignIn() {
    return (
        <div className='nav'>
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn
