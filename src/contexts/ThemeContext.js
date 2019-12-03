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
    console.log('I am the context : ', MyContext)
    return (
      <MyContext.Provider value={{ ...this.state }}>
        {this.props.children}
        {/* childrens définis dans app correspondent en fait à
          <ThemeContextProvider >
             <MyContext.Provider>
             <Les components héritant du state soit static contextType ou MyContext.Consumer />
          </MyContext.Provider>
        </ThemeContextProvider>
        */}
        {/* Je pense qu'ici props correspondent à components passés entre tags de ThemeContextProvider, apprès tout, props souvent passées comme dans composent dans balise ouvrante et fermante */}
      </MyContext.Provider>
    )
  }
}

export default ThemeContextProvider