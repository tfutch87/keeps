import React from 'react'
import Note from  '../components/Note'
// import notes from '../components/notes'
import CreateArea from '../components/CreateArea'
import getNotes from '../components/getNotes'

export default async function home() {

  // Replace the placeholder with your Atlas connection string
const uri =  process.env.MONGODB_URI;

  const { notes } = await getNotes();

  // trim content words to 25 words or less
  let result = note.noteContent;
  let text = result.substring(1, 100);


  return (
    <>
    <CreateArea />
    {/* <Getnotes /> */}
      {notes.map((note, index)=>{return <Note
        key={note._id} 
        id={note._id}
        noteTitle={note.noteTitle} 
        noteContent={text} 
        category={note.category} 
        active={note.active} 
        status={note.status} 
        createdAt={note.createdAt} 


        /> })}
    </>
  )
}
