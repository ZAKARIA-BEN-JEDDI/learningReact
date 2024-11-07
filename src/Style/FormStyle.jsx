import React from 'react'

export default function FormStyle() {
  const Styleh1 = {
    textAlign:'center',
    fontFamily:'Arial',
  }
  const Styleform = {
    backroundColor:'#faeeee',
    border: '1px solid black',
    margin : '5px 20px 0px 20px',
    padding : '0px 20px'
  }
  return (
    <form style={Styleform}>
      <h1 style={Styleh1}>Forulaire Inscription</h1>
      <label htmlFor="nom">Nom</label>
      <input type="text" id="nom" /> <br />
      <label htmlFor="prenom">Prenom</label>
      <input type="text" id="prenom" /> <br />
      <input type="submit" value="Submit" />
    </form>
  )
}
