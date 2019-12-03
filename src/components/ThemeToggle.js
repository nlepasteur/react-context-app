import React, { Component } from 'react'
import { MyContext } from '../contexts/ThemeContext'

class ThemeToggle extends Component {
  static contextType = MyContext
  render() {
    const { button } = this.context
    return (
      <button onClick={button}>click me</button>
    )
  }
}

export default ThemeToggle