import React from 'react'
import Login from './Login'
import useLocalStorage from './useLocalStorage'
import DashBoard from './Dashboard'
import { ContactsProvider } from './ContactsProvider'
import { ConversationsProvider } from './ConversationsProvider'
import { SocketProvider } from './SocketProvider'

function App() {
  const [id,setId] = useLocalStorage("id")

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
        <DashBoard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  return (
    <div>
      {id? dashboard: <Login onIdSubmit={setId}/>}
      
    </div>
  );
}

export default App