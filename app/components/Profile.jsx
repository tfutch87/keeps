import React from 'react'
import Button from '@mui/material/Button';




export default function Profile(props) {

  return (
    
    <div>
            {true ? (
                <div>
               <div style={{display:"flex", alignItems: "center", gap:"10px"}}>
                    {/* <ProfileImage src={props.user.profile.picture} />
                    <p>Name: {props.user.profile.name}</p> */}
                    
                    </div>
                    <Button style={{float:"right"}} variant="contained">Log Out</Button>
                    
                </div>
            ) : (
                <Button onClick={props.logIn} style={{float:"right"}} variant="contained">Log In</Button>
            )}
        </div>
  )
}
