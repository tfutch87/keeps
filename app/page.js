import React from 'react'
import Note from  './components/Note'
import CreateArea from './components/CreateArea'
import getNotes from './components/getNotes'

export default async function home() {

const { notes } = await getNotes();

// console.log(notes)
  return (
    <>
    <CreateArea />
      {notes.map((note, index)=>{return <Note
        key={note._id} 
        id={note._id}
        noteTitle={note.noteTitle} 
        noteContent={note.noteContent} 
        category={note.category} 
        active={note.active} 
        status={note.status} 
        createdAt={note.createdAt}
        userProfileImage={note.userProfileImage}
        userName={note.userName}


        /> })}
    </>
  )
}
