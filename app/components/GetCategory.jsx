import React from 'react'

const GetCategory = async(name) => {

  // console.log(name)

    try {
      const res = await fetch(`http://localhost:3000/api/Category/${name}`, {
        method: 'GET',
        cache: "no-store",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

       
      return  await res.json()
    } catch (error) {
      console.log(error);
    }

}

export default GetCategory
