import { useEffect, useRef } from "react";
import Section from "./Section";
import "./Home.css";
import "./footer.css"
import "./header.css"
import Header from "./header";;

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
  <div className="dot">
    <div className="tooltip">HOME</div>
  </div>
  <div className="dot">
  <div className="tooltip">GALLARY</div>
  </div>
  <div className="dot">
  <div className="tooltip">ABOUT</div>
  </div>
</div>
      <div className={`container`}>
      <Header className="header"  goToSectionRef={section1}
            scrollTo={scrollTo}
            showArrow={true}>
        </Header>
        <div ref={section1}>
          <Section
            image={`https://towersgame.net/img/Screenshots/IonPreview.jpg`}
            headline={`Play Different Heroes with Different Skills And Strategies`}
            goToSectionRef={section2}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>
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
            image={"https://towersgame.net/img/Screenshots/MultiplayerPreviewFarm.jpg"}
            headline={`Play Different Heroes with Different Skills And Strategies`}
            goToSectionRef={section5}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>
        <footer className="footer" ref={section5}>
          </footer>
      </div>
    </div>
  );
}

export default App;
