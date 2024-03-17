"use client"

import React , {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


export default function Note(props) {


  function handleDelete(event){
  props.deleteNote(props.id)
  
  }

  return (
    <div key={props.id} id={props.id} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>
     <DeleteIcon onClick={handleDelete}/>
     </button>
    </div>
  )
}
