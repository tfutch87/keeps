"use client"

import React, {useState} from "react";

function CreateArea(props) {

const [note, setNote] = useState({
    title: "",
    content: ""
});
    


function addButton(e){
    e.preventDefault();

    if(note.title && note.content  ){
      props.addNotes(note)
            // save note array to local user storage
      props.saveToLocalStorage(note)
      setNote({
          title: '',
          content: ''
      })

    } else{
      alert(
      'please fill both title and content'
      )
    }

}

function updateNote(e){
    const {name, value } = e.target;
    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }})
}

  return (
    <div>
      <form>
        <input onChange={updateNote} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={updateNote} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={addButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
