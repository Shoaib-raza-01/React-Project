import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const nav = useNavigate();
  const handleClick = () => {
    nav('/')
  }
  return (
    <div>
      <h1>404 <br/>Not Found</h1><br />
      <button onClick={handleClick}>Go To HomePage</button>
    </div>
  )
}

export default NotFoundPage
