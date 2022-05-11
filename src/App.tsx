import React from "react"
import logo from "./logo.svg"
import "./App.css"
import CheckboxComponent from "./stories/Checkbox"


function App() {
  const _checkbox = {
    title: 'Test Checkbox31',
    state: 'bnm',
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <CheckboxComponent
          checkbox = { _checkbox }
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
