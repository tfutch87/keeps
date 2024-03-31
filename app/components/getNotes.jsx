import React from 'react'

 const getNotes = async() => {

        try {
          const res = await fetch('https://keeps-delta.vercel.app/api/Notes', {
            method: 'GET',
            cache: "no-store",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });

          return res.json();
        } catch (error) {
          console.log(error);
        }
    
}

export default getNotes;