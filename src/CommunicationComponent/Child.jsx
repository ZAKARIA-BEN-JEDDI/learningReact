import {useState , React} from 'react'

export default function Child(props) {
  const [childinput , setchildinput ] = useState('')
  const Styleh3 = {
    textAlign:'center',
    fontSize:'20px'
  }
  const parentStyle = {
    textAlign:'center',
  }
  return (<>
    <div className="child"  style={parentStyle}>
      <h3 style={Styleh3}>composant enfant</h3>
      <div>Valeur du composant parent : {props.parentInput}</div>
      <h3 style={Styleh3}>composant enfant</h3>
      <div>
        <input type="text" onChange={(e)=>props.setchildinput(e.target.value)}/>
      </div>
    </div>
  </>)
}
