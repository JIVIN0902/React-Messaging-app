import React, { useContext,createContext } from 'react'
import Contacts from './Contacts'
import useLocalStorage from './useLocalStorage'

const ContactsContext = createContext()

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {
    
    const [contacts,setContacts] = useLocalStorage('contacts',[])
    
    function createContact(id,name) {
        setContacts(prevContacts => {
            return [...prevContacts, {id, name}]
        })
    }

    return (
        <ContactsContext.Provider value={{contacts, createContact}}>
            {children}
        </ContactsContext.Provider>
    )
}
