import React, { Component } from 'react'
import { MyContext } from '../contexts/ThemeContext'

class Navbar extends Component {
  static contextType = MyContext
  // look at the component tree to the first time it finds a provider for this context
  render() {
    console.log('context in NavBar : ', this.context)
    const { isLightTheme, dark, light } = this.context
    console.log(isLightTheme, dark, light)
    const theme = isLightTheme ? light : dark
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar