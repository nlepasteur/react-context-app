import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

class AuthContextProvider extends Component {
  state = {
    authentificated: false
  }
  changeAuth = () => {
    this.setState({ authentificated: !this.state.authentificated })
  }
  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, changeAuth: this.changeAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider