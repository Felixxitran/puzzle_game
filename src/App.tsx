import React, { useEffect, useState } from 'react'
import Header from './COMPONENTS/title_animation'
import './App.css'
import io from 'socket.io-client'



function App() {

  const [socket, setSocket] = useState<any>(null)

  useEffect(() => {
    setSocket(io('http://localhost:3001'))  // connect to server
  }, []);

  useEffect(() => {
    if (!socket) return

    socket.on('connect', () => {
      console.log('connected')  // get initial data
    })

  }, [socket])

  return (
    <div className='App'>
      <div className='header-container'>
        <Header />
      </div>
    </div>
  )
}

export default App
