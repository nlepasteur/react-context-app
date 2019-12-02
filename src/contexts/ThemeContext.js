import React, { createContext, Component } from 'react'

export const MyContext = createContext()
// if createContext was not imported, it should assign like React.createContext

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  }
  render() {
    console.log(MyContext)
    return (
      <MyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default ThemeContextProvider