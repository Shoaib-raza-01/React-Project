import React, { useEffect, useState } from 'react'


function ClockTimmer() {
  const [time,setTime] = useState(new Date().toTimeString())

//   setInterval(() => {
//     setTime(new Date().toTimeString())
//   }, 1000);

useEffect(() => {
    setInterval(() => {
            setTime(new Date().toTimeString())
          }, 1000);
},[])
  return (
    <div>
      {
        time
      }
    </div>
  )
}

export default ClockTimmer
