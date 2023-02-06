import React, { useState } from 'react'
import CompB from './CompB'

function CompA() {
  const [stateA , setStateA ] = useState(0)
  const [compBValue , setCompBValue] = useState()

  const func =(BValue)=>{
      setCompBValue(BValue)
  }

  return (
    <div>
      <p>Component A : {compBValue}</p>
      <CompB 
        fun = {func}
        value = {stateA}
        update = {setStateA}
        />
    </div>
  )
}

export default CompA
