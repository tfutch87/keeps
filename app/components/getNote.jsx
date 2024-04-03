import React from 'react'

const getNote = async(id) => {

    try {
      const res = await fetch(`https://www.4keeeps.com/api/Notes/${id}`, {
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

export default getNote;
