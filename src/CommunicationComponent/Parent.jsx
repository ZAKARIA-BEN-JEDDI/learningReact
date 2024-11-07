import {useState} from 'react'
import Child from './Child';

export default function Parent(){
  const [poarentInput , setpoarentInput ] = useState('')
  const [childinput , setchildinput ] = useState('')
  const Styleh3 = {
    textAlign:'center',
    fontSize:'20px'
  }
  const parentStyle = {
    textAlign:'center',
  }
  return(
    <>
      <div className="parent" style={parentStyle}>
        
        <h3 style={Styleh3}>Composant Parent</h3>
        <input type="text" onChange={(e) =>setpoarentInput(e.target.value)}/>
      </div>
      <div style={parentStyle}>
        Valeur du composant enfant : {childinput}
      </div>
      <Child parentInput={poarentInput} setchildinput={setchildinput} />
    </>
  )
}