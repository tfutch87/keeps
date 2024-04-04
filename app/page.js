import React from 'react'
import Note from  './components/Note'
import CreateArea from './components/CreateArea'
import getNotes from './components/getNotes'
import {getServerSession} from "next-auth"
import options from '@/app/api/auth/[...nextauth]/options'
import LoginSection from './components/LoginSection'

export default async function home() {

const { notes } = await getNotes();
const session = await getServerSession(options)

function rendernotes(notes){

  if(!notes){
        return <h1>Loading...</h1>
    }
  return(
    notes.map((note, index)=>{return <Note
      key={note._id} 
      id={note._id}
      noteTitle={note.noteTitle} 
      noteContent={note.noteContent.substring(0, 100) + "..."} 
      category={note.category} 
      active={note.active} 
      status={note.status} 
      createdAt={note.createdAt}
      userProfileImage={note.userProfileImage}
      userName={note.userName}
      like={note.userReaction}
      /> })
  )
}


// console.log(notes)
  return (
    <>
    <CreateArea />
    <div style={{display: "flex", justifyContent: "start", flexWrap:"wrap", margin:"0 5px", gap: "15px"}}>
      {session ? rendernotes(notes) : <LoginSection />  }
        </div>
    </>
  )
}
