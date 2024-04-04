import react from 'react';
import GetCategory from '@/app/components/GetCategory';
import Link from 'next/link';
import Note from  '@/app/components/Note'


export default async function Category({ params }) {


  const {notes} = await GetCategory(params.category);

function secretsList (){
  return(
    <ul>
    {notes.map((note, index) => (
      <Note
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


        /> 
     
    ))}
  </ul>
  )
}

const value = params.category;
const output = value.replace(/%20/g, " ");

  return (
    <>
    <div className="page-header" >
    <h1>{output}</h1>
    </div>
    <main>
     {notes.length > 0 ? secretsList() : <p>Sorry no Secrets in this category</p>}
    </main>
    </>
  )
}


