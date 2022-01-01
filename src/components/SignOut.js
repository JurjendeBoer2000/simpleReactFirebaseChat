import React from 'react'
import Button from '@mui/material/Button';
import {signOut} from "firebase/auth";
import { auth } from '../firebase'

function SignOut() {
    return (
        <div className='nav'>
            <Button onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut
