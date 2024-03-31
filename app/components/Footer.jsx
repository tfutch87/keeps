import React from 'react'

export default function Footer() {

  let date = new Date().getFullYear();

  return (
    <footer><p>copyright {date}</p></footer>
    
  )
}
