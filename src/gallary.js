import React,{useEffect, useState } from 'react'
import './gallary.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Gallary({headlineRef}) {
  const [currentImage, setcurrentImage] = useState([]);
  const [currentImageId, setcurrentImageid] = useState([0]);
  const ImagesPath="../public/GallarySlideImage/";
  function GetCurrentImage()
  {
    setcurrentImage("https://towersgame.net/img/Screenshots/IonPreview.jpg");
  };
  useEffect(() => {
    GetCurrentImage();
  }, []);

  useEffect(() => {
    gsap.fromTo(
    '#slide',
      {
        autoAlpha: 0,
        x: -300,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "h2",
          start: "left 80%",
          end: "top 80%",
          immediateRender: false,
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);

  function Left()
  {
    var fullimagePath="";
    setcurrentImageid(currentImageId+1);
    fullimagePath = ImagesPath + {currentImageId} +".jpg";
// setcurrentImage(fullimagePath);
console.warn(fullimagePath);
  }
  return (
    <div className='Slidercontainer'>
<img id="slide" src={currentImage} alt="Snow"></img>
  <div className="centeredHeadlineText">
  <h2 id='id' className="Headlineds" ref={headlineRef}> Here we go</h2>
  <div className="SlideController">
    <button> Right</button>
    <button onClick={()=>Left()}>Left</button>
  </div>
  </div>
    </div>
    
  )
}
