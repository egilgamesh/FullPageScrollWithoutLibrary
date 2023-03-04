import { useEffect, useRef } from "react";
import "./section.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Section({
  image,
  headline,
  scrollTo,
  goToSectionRef,
  showArrow,
  conents,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -40,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".containers",
          trigger: headlineRef.current,
          start: "top 80%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);
  return (
    <div className='section' ref={sectionRef}>

      <div className="imageContainer">
      <img src={image} layout={`fill`} alt="ddd"/>

      </div>
      <div className='content'>
        <h2 className="Headline" ref={headlineRef}>{headline}</h2>
      </div>
      <p>{conents}</p>
      {showArrow && (
        <div
          className="downarrow"
          onClick={() => scrollTo(goToSectionRef)}
        ></div>
      )}
    </div>
  );
}
