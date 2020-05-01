import React, { createContext } from "react"
import Github from "../components/Github"

export const GithubContext = createContext()

export const GithubProvider = (props) => {
  const { data } = Github(null)

  return (
    <GithubContext.Provider value={{ data }}>
      {props.children}
    </GithubContext.Provider>
  )
}
