import React from 'react'

export default function date(createdAt) {

    const timestamp = createdAt;
    const date = new Date(timestamp);

  return (
    date.toLocaleString()
  )
}
