import React from 'react'
import Form from './auth-form.components'

function Login() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='my-[5vh] text-center text-xl'>Sign In to your account</h1>
      <Form />
    </div>
  )
}

export default Login
