import React from 'react'
import Login from './context/components/Login'
import UserContextProvider from './context/components/context/UserContextProvider'
import Profile from './context/components/Profile'

const App = () => {
  return (
    <div>
    <UserContextProvider>
    <Login />
    <Profile />
    </UserContextProvider>
    </div>
  )
}

export default App

