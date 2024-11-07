import React from 'react'

export default function CssStyle() {
  const mystyle = {
    color : "Green",
    backgoundColor : "lightBlue",
    padding : "10px",
    fontFamily : "Arial"
  }
  return (
    <div>
      <h1 style={mystyle}>Bonjour a tous !</h1>
      <p style={{backgoundColor : "lightBlue"}}>Soyez les bienvenue .</p>
    </div>
  )
}
