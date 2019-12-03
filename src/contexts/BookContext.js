import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [book, setBook] = useState([
    { title: 'name of the wind', id: 1 },
    { title: 'the way of kings', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the hero of ages', id: 4 }
  ])

  return (
    <BookContext.Provider value={{ book }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider