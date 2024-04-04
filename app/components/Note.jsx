"use client"

import React from 'react'
import DeleteBlock from './DeleteBlock';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import markSeen from './markSeen';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import UserReaction from './UserReaction';





export default function Note(props) {

  const timestamp = props.createdAt;
  const date = new Date(timestamp);
  const humanReadableTime = date.toLocaleString();

  const markSeen = async (e) => {

    const res = await fetch(`https://www.4keeeps.com/api/Notes/${e.target.id}`, {
      method: "PUT",
      cache: "no-store",
      body: JSON.stringify({ status: "seen" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div key={props.id} id={props.id} className="note">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Avatar sx={{ width: 45, height: 45 }} src={props.userProfileImage} />

        <div>
          <p className="category">

            <Link className="category-link" href={`https://www.4keeeps.com/secretCategory/${props.category}`} >

              {props.category}

            </Link>

          </p>
          <div className="status-container" style={{ display: "flex", gap: "5px" }}>
            <p>{props.status}</p>
            {props.status === "seen" ? <DraftsRoundedIcon /> : <MarkunreadRoundedIcon />}
          </div>
        </div>

      </div>



      <div className="noteBody">

        <p className="noteTitle">{props.noteTitle}</p>
        <p className="noteContent">{props.noteContent}</p>

      </div>



      <div className="noteFooter">
        <button>
          <DeleteBlock id={props.id} />
        </button>


        <Link className="button-61" style={{ float: "left", backgroundColor: "#fff", color: '#227753' }} id={props.id} onClick={markSeen} href={`https://www.4keeeps.com/secret/${props.id}`}>

          OPEN  <AutoStoriesRoundedIcon className="AutoStoriesRoundedIcon" />


        </Link>



      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <p className="time"><span>Created At: {humanReadableTime}</span></p>

        <div> {props.like === "love" ? <><UserReaction like={props.like} id={props.id} /> </> : <><UserReaction like={props.like} id={props.id} /></>} </div>
      </div>
    </div>
  )
}
