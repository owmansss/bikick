import React from 'react'

function SignUpForm() {
  return (
    <div className='w-full p-3 m-3 h-1/2 border-2 md:max-w-xl bg-white shadow-lg shadow-slate-300 rounded-xl'>
      <form className='grid gap-2' action='http://localhost:3000' method='GET'>
        <label className='text-lg font-semibold'>Username</label>
        <input
          type='text'
          className='border-2 p-1 '
          placeholder='Prof. Aceng Pakem Spd.Mn'
          required
        />
        <label className='text-lg font-semibold'>Email</label>
        <input
          type='email'
          className='border-2 p-1 rounded-md'
          placeholder='company@domain.com'
          required
        />
        <label className='text-lg font-semibold'>Password</label>
        <input
          type='password'
          className='border-2 p-1 rounded-md'
          placeholder='********'
          required
        />
        <label className='text-lg font-semibold'>Confirm Password</label>
        <input
          type='password'
          className='border-2 p-1 rounded-md'
          placeholder='********'
          required
        />
        <p>
          By signing up, you understand the{' '}
          <span className='text-blue-500 underline'>term of service</span> and{' '}
          <span className='text-blue-500 underline'>Privacy Policy</span>.
        </p>
        <button
          a
          className='bg-[#FFB000] hover:bg-[#FFD93D] duration-300 min-w-1/3 rounded-2xl text-center p-1 hover:text-white mt-5'
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
