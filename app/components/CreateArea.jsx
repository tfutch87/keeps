"use client"

import { useRouter } from "next/navigation"
import React, {useState, useEffect} from "react";
import { useSession } from 'next-auth/react'
import categories from "@/app/components/categories";



function CreateArea() {

const {data : session} = useSession();

const [formData, setFormData] = useState({
  email: 'tfutch87@yahoo.com',
  userName: 'tfutch',
  userProfileImage: 'someimg.png',
  noteTitle: '',
  noteContent: '',
  status: 'unseen',
  category : '',
  active : true,
});


useEffect(() => {
  if (session) {
      setFormData({
          ...formData,
          email: session.user.email, // Assuming session.user.email exists
          userName: session.user.name, // Adjust according to your session structure
          userProfileImage: session.user.image, // Adjust according to your session structure
      });
  }
}, [session]);

const router = useRouter();

function updateNote(e){
    const {name, value } = e.target;
    setFormData(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }})
}

async function handleSubmit(e){
        e.preventDefault();
        const res = await fetch('/api/Notes', {
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        });
        
        setFormData(
          {
            email: '',
            userName: '',
            userProfileImage: '',
            noteTitle: '',
            noteContent: '',
            status: 'unread',
            category : '',
            active : true,
          }
        )
        
        router.push('/');
        router.refresh();
       
      }

      const categoryOptions = categories()

function form(){

  return(
    <form onSubmit={handleSubmit} method="post">
    <input onChange={updateNote} name="userName" required={true} value={formData.userName} placeholder="user name" type="hidden" />
    <input onChange={updateNote} name="userProfileImage" required={true} value={formData.userProfileImage} placeholder="Image" type="hidden" />
    <input onChange={updateNote} name="noteTitle" required={true} value={formData.noteTitle} placeholder="Title" />
    <input onChange={updateNote} name="status" required={true} value={formData.status} placeholder="Status" type="hidden" />
    <input onChange={updateNote} name="email" required={true} value={formData.email} placeholder="email" type="hidden" />
    <input onChange={updateNote} name="status" required={true} value={formData.status} type="hidden" />

        <select onChange={updateNote} id="category" name="category">
        {categoryOptions.map((category)=>(
          <option key={category} value={category}>{category}</option>
        ))}
        </select>
    <textarea onChange={updateNote} name="noteContent" value={formData.noteContent} placeholder="Create a Secret..." rows="3" />
    <button type="submit" value="Create Ticket">Add</button>
  </form>
  )
}

  return (
    <div>
    {session ? form() : " "}
    </div>
  );
}

export default CreateArea;
