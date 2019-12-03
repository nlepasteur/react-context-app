import React, { useContext } from 'react'
import { MyContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { button } = useContext(MyContext)

  return (
    <button onClick={button}>click me</button>
  )
}

export default ThemeToggle