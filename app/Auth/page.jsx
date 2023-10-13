import React from 'react'

function Auth() {
  return (
    <div className='w-full h-full mx-auto p-5 '>
      <div className='border-2 m-5 rounded-xl min-h-[40vh] bg-white shadow-slate-500 shadow-xl md:mx-auto md:w-[100vh] flex flex-col justify-center items-center'>
        <h1 className='text-center font-[Poppins] text-[3vh]'>
          Special Offer Today!
        </h1>
        <p>Join Now!</p>
        <div className=' flex flex-col justify-center items-center mt-5 mb-3'>
          <button className='flex gap-3 border-2 p-1 rounded-xl '>
            <img src='/instagram.svg' width={20} />
            Create Account with Instagram
          </button>
          <span>or</span>
          <hr />
          <a href="/Auth/signup" className='w-1/2 border-2 h-[3vh] md:h-[4vh] md:p-1 text-center text-white bg-blue-500 rounded-xl'>Create Account</a>
        </div>
        <hr className='w-full h-3'/>
        <div className='w-1/2 flex flex-col justify-center items-center gap-3'>
          <h1>Already have an account?</h1>
          <a
            href='/Auth/login'
            className='w-1/2 h-[3vh] md:h-[4vh] md:p-1 mx-auto border-2 bg-blue-500 text-center text-white rounded-xl'
          >
            sign in
          </a>
        </div>
      </div>
    </div>
  )
}
[
]
export default Auth
