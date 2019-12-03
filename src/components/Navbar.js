import React, { Component } from 'react'
import { MyContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class Navbar extends Component {
  // static contextType = MyContext
  // look at the component tree to the first time it finds a provider for this context
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <MyContext.Consumer>{(context) => {
          const { changeAuth, authentificated } = authContext
          const { isLightTheme, dark, light } = context
          const theme = isLightTheme ? light : dark
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <h1 onClick={changeAuth}>{authentificated ? 'Log in' : 'Log out'}</h1>
            </nav>
          )
        }}
        </MyContext.Consumer>
      )}</AuthContext.Consumer>
    )
  }
}

export default Navbar