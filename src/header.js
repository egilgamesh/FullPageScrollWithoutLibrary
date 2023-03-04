import React from "react";
import { useRef } from "react";
import "./header.css";

export default function Header({ goToSectionRef, scrollTo, showArrow }) {
  const sectionRef = useRef();
  return (
    <div className="header">
      <section className="showcase">
        <div className="video-container" ref={sectionRef}>
          <video
            src="https://towersgame.net/video/TowersLoop.mp4"
            loop
            autoPlay={true}
            muted="muted"
          ></video>
        </div>
        <div className="flexcontainer">
          <div className="Logo">
            <img src="img/TowersLogo.png" alt="Towers" />
          </div>
          <div className="Downloadbtn">
            <a
              href="https://store.steampowered.com/app/1673670/Towers/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="ImageContainerWithText">
                <img
                  className="img"
                  src="img/ButtonWebsitePlayNow.png"
                  alt="Download the game"
                ></img>
                <div className="centered">
                <p>Play Now</p>
                </div>

              </div>
            </a>
          </div>
        </div>
        {showArrow && (
          <div
            className="downarrow"
            onClick={() => scrollTo(goToSectionRef)}
          ></div>
        )}
      </section>
    </div>
  );
}
