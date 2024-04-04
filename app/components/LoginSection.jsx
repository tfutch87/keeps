import React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function LoginSection() {
  return (


    <div style={{display: "grid", position: "fixed", zIndex: 100, backgroundColor: "#d9ffef", textAlign: "center", placeContent: "center", width: "100%", height: "50%" }}>
    
    <div>
        <h1 style={{ marginBottom: "20px"  }}> Please Sign In To Continue</h1>
        <div> <Button style={{ color: "#fff"  }} variant="contained"><Link  style={{color: "#fff"  }}  href="/api/auth/signin?callbackUrl=/" >Log In</Link> </Button> </div>
    </div>
    
    
    </div>


  )
}
