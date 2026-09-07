import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/Finale.css";

import finaleImage from "./assets/finale.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Finale() {

  const navigate = useNavigate();

  const sectionRef = useRef(null);

  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const logoRef = useRef(null);
  const ctaRef = useRef(null);


  useLayoutEffect(() => {

    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {

      gsap.set(imageRef.current, {
        scale: 1.12,
        opacity: 0,
      });

      gsap.set(overlayRef.current, {
        opacity: 1,
      });

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(logoRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 25,
      });


      const tl = gsap.timeline({

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: "+=1800",

          scrub: 1.1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },

      });


      tl.to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        0
      );


      tl.to(
        overlayRef.current,
        {
          opacity: 0.35,
          duration: 1.4,
          ease: "power2.out",
        },
        0.1
      );


      tl.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.4
      );


      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0.55
      );


      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.95
      );


      tl.to(
        logoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        1.35
      );


      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        1.5
      );


      tl.to(
        imageRef.current,
        {
          scale: 1.06,
          duration: 2.5,
          ease: "power1.inOut",
        },
        2.1
      );


      tl.to(
        overlayRef.current,
        {
          opacity: 0.85,
          duration: 1,
          ease: "power2.in",
        },
        4.7
      );

    }, section);


    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={sectionRef}
      className="finale"
    >

      <div className="finale-background">

        <img
          ref={imageRef}
          src={finaleImage}
          alt=""
          draggable="false"
        />

        <div
          ref={overlayRef}
          className="finale-overlay"
        />

      </div>


      <div className="finale-content">

        <span
          ref={eyebrowRef}
          className="finale-eyebrow"
        >
          THE LAST IMPRESSION
        </span>


        <h1
          ref={titleRef}
          className="finale-title"
        >
          MAKE YOURS
          <br />

          <em>
            UNFORGETTABLE.
          </em>

        </h1>


        <p
          ref={subtitleRef}
          className="finale-subtitle"
        >
          A scent becomes a memory
          <br />
          when it becomes yours.
        </p>


        <div className="finale-bottom">

          <div
            ref={logoRef}
            className="finale-logo"
          >
            ÉLANE
          </div>


          <div
            ref={ctaRef}
            className="finale-actions"
          >

            <button
              className="finale-action"
              onClick={() => navigate("/")}
            >
              RETURN TO ÉLANE
              <span>↗</span>
            </button>


            <a
              className="finale-action"
              href="https://www.linkedin.com/in/jaymeen07r/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DESIGN & DEVELOPMENT
              <span>↗</span>
            </a>


            <button
              className="finale-action"
              onClick={() => navigate("/credits")}
            >
              SITE CREDITS
              <span>↗</span>
            </button>

          </div>

        </div>

      </div>

    </section>

  );
}