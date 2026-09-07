import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/Atmosphere.css";

import atmosphere from "./assets/atmosphere.png";

gsap.registerPlugin(ScrollTrigger);

export default function Atmosphere() {
  const sectionRef = useRef(null);

  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const wordOneRef = useRef(null);
  const wordTwoRef = useRef(null);
  const wordThreeRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /*
       * ==========================================
       * INITIAL STATE
       * ==========================================
       */

      gsap.set(imageRef.current, {
        scale: 1.18,
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
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set([wordOneRef.current, wordTwoRef.current, wordThreeRef.current], {
        opacity: 0,
        y: 35,
      });

      /*
       * ==========================================
       * MAIN SCROLL TIMELINE
       * ==========================================
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: "+=2200",

          scrub: 1.1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
       * ==========================================
       * 01 — IMAGE ENTERS
       * ==========================================
       */

      tl.to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        0,
      );

      /*
       * ==========================================
       * 02 — LIGHT OPENS
       * ==========================================
       */

      tl.to(
        overlayRef.current,
        {
          opacity: 0.42,
          duration: 1.4,
          ease: "power2.out",
        },
        0,
      );

      /*
       * ==========================================
       * 03 — EYEBROW
       * ==========================================
       */

      tl.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.35,
      );

      /*
       * ==========================================
       * 04 — MAIN TITLE
       * ==========================================
       */

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        0.55,
      );

      /*
       * ==========================================
       * 05 — DESCRIPTION
       * ==========================================
       */

      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.95,
      );

      /*
       * ==========================================
       * 06 — ATMOSPHERIC WORDS
       * ==========================================
       */

      tl.to(
        wordOneRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        1.4,
      );

      tl.to(
        wordTwoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        1.65,
      );

      tl.to(
        wordThreeRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        1.9,
      );

      /*
       * ==========================================
       * 07 — CINEMATIC PUSH
       * ==========================================
       */

      tl.to(
        imageRef.current,
        {
          scale: 1.08,
          duration: 2.6,
          ease: "power1.inOut",
        },
        2.4,
      );

      /*
       * ==========================================
       * 08 — WORDS DRIFT
       * ==========================================
       */

      tl.to(
        wordOneRef.current,
        {
          x: -45,
          duration: 2.4,
          ease: "none",
        },
        2.4,
      );

      tl.to(
        wordTwoRef.current,
        {
          x: 40,
          duration: 2.4,
          ease: "none",
        },
        2.4,
      );

      tl.to(
        wordThreeRef.current,
        {
          x: -25,
          duration: 2.4,
          ease: "none",
        },
        2.4,
      );

      /*
       * ==========================================
       * 09 — FINAL FADE
       * ==========================================
       */

      tl.to(
        [
          eyebrowRef.current,
          titleRef.current,
          textRef.current,
          wordOneRef.current,
          wordTwoRef.current,
          wordThreeRef.current,
        ],
        {
          opacity: 0,
          y: -35,
          duration: 1,
          stagger: 0.04,
          ease: "power2.in",
        },
        4.8,
      );

      tl.to(
        overlayRef.current,
        {
          opacity: 0.9,
          duration: 1,
          ease: "power2.in",
        },
        4.8,
      );

      tl.to(
        imageRef.current,
        {
          scale: 1.14,
          opacity: 0.25,
          duration: 1,
          ease: "power2.in",
        },
        4.8,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="atmosphere">
      <div className="atmosphere-background">
        <img ref={imageRef} src={atmosphere} alt="" draggable="false" />

        <div ref={overlayRef} className="atmosphere-overlay" />
      </div>

      <div className="atmosphere-header">
        <div>
          <span className="atmosphere-number">THE ATMOSPHERE</span>
        </div>
      </div>

      <div className="atmosphere-content">
        <span ref={eyebrowRef} className="atmosphere-eyebrow">
          BEYOND THE BOTTLE
        </span>

        <h2 ref={titleRef} className="atmosphere-title">
          A SCENT
          <br />
          <em>HAS A PLACE.</em>
        </h2>

        <p ref={textRef} className="atmosphere-text">
          Before it becomes a memory, fragrance belongs to a moment. A room. A
          night. A person.
        </p>
      </div>

      {/* ==========================================
          ATMOSPHERIC WORDS
      =========================================== */}

      <div className="atmosphere-words">
        <span ref={wordOneRef} className="atmosphere-word word-one">
          LIGHT
        </span>

        <span ref={wordTwoRef} className="atmosphere-word word-two">
          SKIN
        </span>

        <span ref={wordThreeRef} className="atmosphere-word word-three">
          MEMORY
        </span>
      </div>
    </section>
  );
}
