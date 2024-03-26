"use client"

import React from 'react'
import DeleteBlock from './DeleteBlock';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import markSeen from './markSeen';


export default function Note(props) {

  const timestamp = props.createdAt;
const date = new Date(timestamp);
const humanReadableTime = date.toLocaleString();

const markSeen = async (e) => {

  const res = await fetch(`http://localhost:3000/api/Notes/${e.target.id}`, {
    method: "PUT",
    body: JSON.stringify({ status: "seen" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

  return (
    <div key={props.id} id={props.id} className="note">
    <div style={{display: "flex", justifyContent: "space-between"}}>  <Avatar sx={{ width: 24, height: 24 }} src={props.userProfileImage} />   <span>{props.userName}</span></div>
      <h1>{props.email}</h1>
      <p>{props.category}</p>
      <p>{props.noteTitle}</p>
      <p>{props.content}</p>
      <p>{props.noteContent}</p>
      <p>{props.status}</p>
      <p>{props.active}</p>
      <p>{humanReadableTime}</p>
      
      <button>
      <DeleteBlock id={props.id} />
     </button>

      <Link id={props.id} onClick={markSeen} href={`http://localhost:3000/secret/${props.id}`}> Open </Link>

    </div>
  )
}
