import React  from 'react'
import Profile from './Profile'
import { getServerSession } from 'next-auth'
import Button from '@mui/material/Button';
import Link from 'next/link';
import options from '@/app/api/auth/[...nextauth]/options'
import Avatar from '@mui/material/Avatar';
import NavigationList from '@/app/components/NavigationList'


export default async function Header(props) {

  const session = await getServerSession(options)

  return (
    <>

    <header style={{display: "flex", justifyContent: "space-between"}}>
    
    <h1> <Link href="/" >4 Keeps</Link></h1> 

    <div> <NavigationList /></div>

   <div> {session ? <div style={{display: "flex", gap: 20}}> <Button style={{float:"right"}}  variant="contained"> <Link href="/api/auth/signout?callbackUrl=/" >Log Out</Link> </Button> <Avatar sx={{ width: 24, height: 24 }} src={session.user.image} /></div> : <Button style={{float:"right"}} variant="contained"><Link href="/api/auth/signin?callbackUrl=/" >Log In</Link> </Button> } </div>
    
    </header>
    
    </>
    
  )
}
