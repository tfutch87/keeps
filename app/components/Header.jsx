import React  from 'react'
import Profile from './Profile'


export default function Header(props) {


  return (
    <>

    <header style={{display: "flex", justifyContent: "space-between"}}>
    
    <h1>4 Keepers</h1> 

    <Profile logOut={props.logOut} logIn={props.logIn} user={props.user} />
    
    </header>
    
    </>
    
  )
}
