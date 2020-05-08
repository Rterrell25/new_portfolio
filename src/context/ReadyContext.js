import React, { useState, createContext } from "react"

export const ReadyContext = createContext()

export const ReadyProvider = (props) => {
  const [ready, setReady] = useState(false)

  return (
    <ReadyContext.Provider value={{ ready, setReady }}>
      {props.children}
    </ReadyContext.Provider>
  )
}
