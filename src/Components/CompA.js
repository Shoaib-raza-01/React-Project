import React, { createContext, useState } from 'react'
import CompB from './CompB'

//create a contrext and wrap the components where you want them using provider with that name 
// to use it we have to export it 
export const StateContext = createContext()

function CompA() {
  const [stateA , setStateA ] = useState(0)
  const [compBValue , setCompBValue] = useState()

  const func =(BValue)=>{
      setCompBValue(BValue)
  }

  return (
    <StateContext.Provider value={stateA}>
      <p>Component A : {compBValue}</p>
      <CompB 
        fun = {func}
        update = {setStateA}
        />
    </StateContext.Provider>
  )
}

export default CompA
