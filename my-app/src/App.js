import React from "react"
import "./components/App.scss"

function App() {
  return (
    <div className="App">
      <nav>
        <img src="" alt="logo" />
        <div>
          <ul>HOME</ul>
          <ul>ABOUT</ul>
          <button>
            {" "}
            <a href="https://make.kolable.com/contact"> GET IN TOUCH </a>
          </button>
        </div>
      </nav>
      <div>
        <div>
          <div>
            <h1>
              Growing your knowledge business with KOLABLE has never been easier
            </h1>
            <p>For influencers, consultants, educational institutions</p>
            <p>
              Online courses, e-commerce, O2O events ... whatever you need all
              in one place
            </p>
          </div>
          <p></p>
          <div>
            <button>GET IN TOUCH</button>
          </div>
        </div>
      </div>
      <img
        src="https://make.kolable.com/hubfs/%E5%AE%98%E7%B6%B2%E5%9C%9604-1-1.png"
        alt="官網圖"
      />
    </div>
  )
}

export default App
