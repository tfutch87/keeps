"use client"
import React, {useState} from 'react'
import Note from  '../components/Note'
// import notes from '../components/notes'
import CreateArea from '../components/CreateArea'

export default function home() {

  // Replace the placeholder with your Atlas connection string
const uri =  process.env.MONGODB_URI;


  const [notes , setNotes] = useState([]); 


 function saveToLocalStorage(notes){

  // create local array to storage to the local storage.
  // when the function is ran, check if there is an existing array, if not create one.
  // if there is an existing array, push the new note into the array.
  let note;
  if(localStorage.getItem("notes") === null){
    note = [];
  }else{
    note = JSON.parse(localStorage.getItem("notes"));
  }
  note.push(notes);
  // set the new array to local storage
  localStorage.setItem("notes", JSON.stringify(note));

  
 }

 function getSaveNotes(){
  // get the notes from local storage
  let notes = JSON.parse(localStorage.getItem("notes"));
  return notes;
 }

  function addNotes(note){
 
    setNotes(prevNotes => {

      return [...prevNotes, note]
    
    })


    
    }


  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    } )
  }

  return (
    <>
    <CreateArea addNotes={addNotes} notes={notes} saveToLocalStorage={saveToLocalStorage}  />
      {notes.map((note, index)=>{return <Note deleteNote={deleteNote}key={index} id={index} title={note.title} content={note.content} /> })}
    </>
  )
}
