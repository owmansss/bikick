import React from 'react'

function Form() {
  return (
    <div className='w-full p-3 m-3 h-1/2 border-2 md:max-w-xl bg-white shadow-lg shadow-slate-300 rounded-xl'>
      <form className='grid gap-2'>
        <label className='text-lg font-semibold'>Email</label>
        <input
          type='email'
          className='border-2 p-1'
          placeholder='company@domain.com'
          required
        />
        <label className='text-lg font-semibold'>Password</label>
        <input
          type='password'
          className='border-2 p-1'
          placeholder='********'
          required
        />
        <button
          a
          className='bg-[#FFB000] hover:bg-[#FFD93D] duration-300 min-w-1/3 rounded-2xl text-center p-1 hover:text-white mt-5'
        >
          Sign Up
        </button>
        <button
          a
          className='bg-[#FFB000] hover:bg-[#FFD93D] duration-300 min-w-1/3 rounded-2xl text-center p-1 hover:text-white mt-5'
        >
          Forgot Password?
        </button>
      </form>
    </div>
  )
}

export default Form
