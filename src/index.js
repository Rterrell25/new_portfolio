import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { GithubProvider } from "./context/GithubContext"
import { ReadyProvider } from "./context/ReadyContext"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <ReadyProvider>
    <GithubProvider>
      <App />
    </GithubProvider>
  </ReadyProvider>,

  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
