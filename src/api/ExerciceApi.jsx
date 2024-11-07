
import React , {useState,useEffect} from 'react'
import axios from 'axios'

// export default function ExerciceApi(){

//   const child = {
//     backgroundColor: 'rgb(158,227,133)',
//     width:'40%',
//     margin:'4px auto',
//     padding:'10px',
//     border:'1px solid rgb(70,88, 64)',
//     borderRadius:'4px',
//     boxShadow:'8px rgb(210,217,208)',
//   }

//   const [utilisateur ,setutilisateur] = useState([])

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(
//       (res)=>{
//         setutilisateur(res.data)
//       }
//     )
//   },[])

//   return <>
//     <div>
//       {utilisateur
//         .filter((data) => data.id === 3) // Filter for items where id is 3
//         .map((data) => (
//           <div key={data.id} className="child">
//             {data.name}
//           </div>
//       ))}
//     </div>
//   </>
// }

// export default function ExerciceApi(){
//   const [id_value , setid ] = useState(1);
//   const child = {
//     backgroundColor: 'rgb(158,227,133)',
//     width:'70%',
//     margin:'4px auto',
//     padding:'10px',
//     border:'1px solid rgb(70,88, 64)',
//     borderRadius:'4px',
//     boxShadow:'8px rgb(210,217,208)',
//   }

//   const [utilisateur ,setutilisateur] = useState([])

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(
//       (res)=>{
//         setutilisateur(res.data)
//       }
//     )
//   },[])

//   const handleChange = (e) => {
//     setid(e.target.value);
//   };

//   return <>
//     donne le id <input type="text" style={{border:"1px solid black"}} className="id" onChange={handleChange}/>
//     <div style={child}>
//       {utilisateur
//         .filter((data) => data.id === Number(id_value))
//         .map((data) => (
//           <div key={data.id} className="child">
//             name :{data.name} <br/>
//             email : {data.email} <br/>
//             phone : {data.phone} <br/>
//             city : {data.address.city} <br/>
//             rue : {data.address.street} <br/>
//           </div>
//       ))}
//     </div>
//   </>
// }




export default function ExerciceApi(){

  const child = {
    backgroundColor: 'rgb(158,227,133)',
    width:'70%',
    margin:'4px auto',
    padding:'10px',
    border:'1px solid rgb(70,88, 64)',
    borderRadius:'4px',
    boxShadow:'8px rgb(210,217,208)',
  }

  const usersStyle = {
    border:'1px solid red',
    margin:'10px 0',
    padding:'10px',
  }

  const buttonStyle = {
    border:'1px solid #000',
    borderRadius:'5px',
    backgroundColor:'#fff',
    padding:'2px 5px',
    marginTop:'10px'
  }

  const [utilisateur ,setutilisateur] = useState([])
  const [Postutilisateur ,setPostutilisateur] = useState([])
  const [afficherPost , SetafficherPost ] = useState(false)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(
      (res)=>{
        setutilisateur(res.data)
      }
    )
  },[])

  return <>
    <div style={child}>
      {utilisateur.map((data,key) => (
          <div key={data.id} className="child">
            <div style={usersStyle}>
              <h1> name : {data.name} </h1><br/>
              email : {data.email} <br/>
              city : {data.address.city}  rue:{data.address.street} <br/>
              <button key={key} style={buttonStyle} 
                onClick={
                  ()=>{
                    SetafficherPost(true)
                    console.log(key)  
                    axios.get(`https://jsonplaceholder.typicode.com/posts?id=${key}`)
                      .then(
                        (res)=>{
                          setPostutilisateur(res.data)
                          console.log(Postutilisateur)
                        }
                      )
                    }
                }>
                
                details posts
              </button>
            </div>
          </div>
      ))}
    </div>
  </>
}
