import React from "react"
import "./components/App.css"

function App() {
  return (
    <div className="App">
      <nav className="nav-wrapper">
        <div className="logo-img">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/0532c6f9e5b5d8fdc8b1c4234a448603ef9aa1c6/8b0c8/img/logo.svg"
            alt="logo"
          />
        </div>
        <div className="nav-content">
          <div className="nav-menu">
            <ul>
              <span>
                <ol>HOME</ol>
              </span>
              <span>
                <ol>ABOUT</ol>
              </span>
            </ul>
          </div>{" "}
          <a href="https://make.kolable.com/contact">
            <span>GET IN TOUCH</span>
          </a>
        </div>
      </nav>
      <div className="hero-01">
        <div className="hero-01-content">
          <div className="hero-01-text-content">
            <div>
              <h1>
                <span>
                  Growing your knowledge business with KOLABLE has never been
                  easier
                </span>
              </h1>
              <p>For influencers, consultants, educational institutions</p>
              <p>
                Online courses, e-commerce, O2O events ... whatever you need all
                in one place
              </p>
              <p className="hero-01-text-content-child"></p>
            </div>
            <div className="hero-01-text-btn">
              <a href="https://make.kolable.com/contact">
                <span>GEI IN TOUCH</span>
              </a>
            </div>
          </div>
          <div className="hero-01-img">
            <img
              src="https://make.kolable.com/hubfs/%E5%AE%98%E7%B6%B2%E5%9C%9604-1-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="recommended-wrapper">
        <div>
          <h3>
            <span>Widely recommended by</span>
          </h3>
        </div>
        <div className="recommended-img-wrapper">
          <div className="img-div">
            <img
              className="img"
              src="https://make.kolable.com/hubfs/%E4%B8%8B%E8%BC%89-(1).jpg"
              alt=""
            />
          </div>
          <div className="img-div">
            <img
              className="img"
              src="https://make.kolable.com/hubfs/unnamed.jpg"
              alt=""
            />
          </div>
          <div className="img-div">
            <img
              className="img"
              src="https://make.kolable.com/hubfs/007_%E5%B7%A6%E5%8F%B3%E4%B8%AD%E5%B0%8F.jpg"
              alt=""
            />
          </div>
          <div className="img-div">
            <img
              className="img"
              src="https://make.kolable.com/hubfs/logo_oodesign.jpg"
              alt=""
            />
          </div>
          <div className="img-div">
            <img
              className="img"
              src="https://make.kolable.com/hubfs/isznlogo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
