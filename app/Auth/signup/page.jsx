import React from 'react'
import SignUpForm from './signup-form.components'

function SignUp() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-xl'>Create New Account</h1>
      <SignUpForm />
    </div>
  )
}

export default SignUp
