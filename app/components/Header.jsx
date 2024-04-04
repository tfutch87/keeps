import React from 'react'
import { getServerSession } from 'next-auth'
import Button from '@mui/material/Button';
import Link from 'next/link';
import options from '@/app/api/auth/[...nextauth]/options'
import Avatar from '@mui/material/Avatar';
import BasicSpeedDial from '@/app/components/BasicSpeedDial'



export default async function Header(props) {

  const session = await getServerSession(options)
  


  return (
    <>

      <header style={{ display: "flex", justifyContent: "space-between" }}>

        <h1 className="logo"> <Link href="/" >4Keeeps</Link></h1>



        <div className="custom-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div>

            <div className="nav-menu-icon-container" >
              <BasicSpeedDial />
            </div>

          </div>

          {session ? <div style={{ display: "flex", gap: 20, alignItems: "center" }}> <Button sx={{ float: "right", color: "#fff", backgroundColor: "#227753" }} variant="contained"> <Link style={{color: "#fff"  }}  href="/api/auth/signout?callbackUrl=/" >Log Out</Link> </Button> <Avatar sx={{ width: 24, height: 24 }} src={session.user.image} /></div> : <Button sx={{ float: "right", color: "#fff", backgroundColor: "#227753"  }} variant="contained"><Link  style={{color: "#fff"  }}  href="/api/auth/signin?callbackUrl=/" >Log In</Link> </Button>}


        </div>

      </header>

    </>

  )
}
