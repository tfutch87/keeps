import React from 'react'

const markSeen = async (id) => {
    const res = await fetch(`https://www.4keeeps.com/api/Notes/${id}`, {
      method: "PUT",
      cache: "no-store",
      body: JSON.stringify({ status: "seen" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  export default markSeen