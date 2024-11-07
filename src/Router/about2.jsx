import React from 'react'
import { useParams } from 'react-router-dom'

export default function About2() {
  let {id} = useParams()
  return (

    <div>
      <h2>ID : {id}</h2>
    </div>
  )
}
