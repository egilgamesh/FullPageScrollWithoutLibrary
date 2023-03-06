import { useEffect, useRef } from "react";
import Section from "./Section";
import "./Home.css";
import "./footer.css";
import "./header.css";
import Header from "./header";
import Hero from "./hero";
import Gallary from "./gallary";

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="App">
      <div className="containerdot">
        <ul className="smenu">
          <li className="smenuitem">
            <a href="#home">
              <span className="tooltip">HOME</span>
            </a>
          </li>
          <li className="smenuitem">
            <a href="#">
              <span className="tooltip">GALLARY</span>
            </a>
          </li>
          <li className="smenuitem">
            <a href="#">
              <span className="tooltip">ABOUT</span>
            </a>
          </li>
          <li className="smenuitem">
            <a href="#">
              <span className="tooltip">HOME</span>
            </a>
          </li>
          <li className="smenuitem">
            <a href="#">
              <span className="tooltip">HOME</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={`containers`}>
        <Header id="home"
          className="header"
          goToSectionRef={section1}
          scrollTo={scrollTo}
          showArrow={true}
        ></Header>
        <div ref={section1}>
          <Hero
            image={`https://towersgame.net/img/Screenshots/IonPreview.jpg`}
            headline={`Play Different Heroes with Different Skills And Strategies`}
            goToSectionRef={section2}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>
        <Gallary></Gallary>
        <div ref={section2}>
          <Section
            image={`https://towersgame.net/img/Screenshots/GrantPreview.jpg`}
            headline={`Play Different Heroes with Different Skills And Strategies`}
            goToSectionRef={section3}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>

        <div ref={section3}>
          <Section
            image={
              "https://towersgame.net/img/Screenshots/MultiplayerPreviewFarm.jpg"
            }
            headline={`Play Different Heroes with Different Skills And Strategies`}
            goToSectionRef={section5}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>
        <footer className="footer" ref={section5}></footer>
      </div>
    </div>
  );
}

export default App;
