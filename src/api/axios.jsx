import React , {useState,useEffect} from 'react'
import axios from 'axios'

export default function Axios(){

  const child = {
    backgroundColor: 'rgb(158,227,133)',
    width:'40%',
    margin:'4px auto',
    padding:'10px',
    border:'1px solid rgb(70,88, 64)',
    borderRadius:'4px',
    boxShadow:'8px rgb(210,217,208)',
  }

  const [utilisateur ,setutilisateur] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(
      (res)=>{
        console.log(res.data)
        setutilisateur(res.data)
      }
    )
  },[])

  return <>
    Nombre des utilisateur {utilisateur.length}
    <div>
      {utilisateur.map(data =>{
        return (
          <div key={data.id} className='child' style={child}>
            <h3 style={{color:"rgb(92,62,3"}}>{data.name}</h3>
            <p>email : {data.email} </p>
            <p>city : {data.address.city} <br />
              rue : {data.address.street}
            </p>
          </div>
        )
      })}
    </div>
  </>
}