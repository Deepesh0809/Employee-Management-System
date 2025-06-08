import React, { useContext, useEffect, useState } from 'react'
import Login from "./components/Auth/Login"
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/Authprovider'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser("admin")
      // console.log(user)
      // console.log("this is admin")
    }else if(email == 'employee@me.com' && password == '123'){
      setUser("employee")
      // console.log(user)
      // console.log("this is employee")
    }else{
      alert("invalid credentials")
    }
    // console.log(email,password)
  }
  // handleLogin("employee@me.com",123)

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)

  const data = useContext(AuthContext)
  console.log(data)


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}  {/* Agar user nahi hai to login khol do aur agar user hai to kuch mat kro */}
      {user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/>}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App