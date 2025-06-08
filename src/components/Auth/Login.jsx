import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  // console.log(handleLogin)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    console.log(`Email is ${email}`)
    console.log(`Password is ${password}`)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center' >
      <div className='border-2 rounded-xl border-emerald-600 p-20' >
        <form
          onSubmit={(e) => { submitHandler(e) }}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required
            className='border-2 border-emerald-600 text-white outline-none bg-transparent text-xl py-3 px-5 rounded-full placeholder-gray-400 ' type="email" placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            className='border-2 border-emerald-600 text-white outline-none bg-transparent text-xl py-3 px-5 mt-3 rounded-full placeholder-gray-400 ' type="password" placeholder='Enter password'
          />
          <button className='text-white outline-none bg-emerald-600 mt-5 text-xl py-3 px-5 rounded-full placeholder-white ' >Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login