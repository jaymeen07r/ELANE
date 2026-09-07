import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/TheObject.css";

import bottle from "./assets/object-bottle.png";
import objectBg from "./assets/object-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function TheObject() {
  const sectionRef = useRef(null);

  const bottleRef = useRef(null);
  const glowRef = useRef(null);
  const shadowRef = useRef(null);

  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const numberRef = useRef(null);
  const nameRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /*
       * ==========================================
       * INITIAL STATE
       * ==========================================
       */

      gsap.set(bottleRef.current, {
        y: 180,
        scale: 0.82,
        rotateZ: -2,
        opacity: 0,
      });

      gsap.set(glowRef.current, {
        scale: 0.6,
        opacity: 0,
      });

      gsap.set(shadowRef.current, {
        scaleX: 0.4,
        opacity: 0,
      });

      gsap.set(eyebrowRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(titleRef.current, {
        y: 50,
        opacity: 0,
      });

      gsap.set(descriptionRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(numberRef.current, {
        y: 25,
        opacity: 0,
      });

      gsap.set(nameRef.current, {
        y: 25,
        opacity: 0,
      });

      /*
       * ==========================================
       * MAIN TIMELINE
       * ==========================================
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: "+=2600",

          scrub: 1.2,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
       * ------------------------------------------
       * 01 — ATMOSPHERE APPEARS
       * ------------------------------------------
       */

      tl.to(
        glowRef.current,
        {
          opacity: 0.45,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        0,
      );

      /*
       * ------------------------------------------
       * 02 — LABEL
       * ------------------------------------------
       */

      tl.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.15,
      );

      /*
       * ------------------------------------------
       * 03 — TITLE
       * ------------------------------------------
       */

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        0.3,
      );

      /*
       * ------------------------------------------
       * 04 — DESCRIPTION
       * ------------------------------------------
       */

      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.55,
      );

      /*
       * ------------------------------------------
       * 05 — BOTTLE ENTERS
       * ------------------------------------------
       */

      tl.to(
        bottleRef.current,
        {
          opacity: 1,

          y: 0,

          scale: 1,

          rotateZ: 0,

          duration: 2,

          ease: "power3.out",
        },
        0.4,
      );

      /*
       * ------------------------------------------
       * 06 — SHADOW
       * ------------------------------------------
       */

      tl.to(
        shadowRef.current,
        {
          opacity: 0.5,

          scaleX: 1,

          duration: 1.3,

          ease: "power2.out",
        },
        0.9,
      );

      /*
       * ------------------------------------------
       * 07 — PRODUCT INFORMATION
       * ------------------------------------------
       */

      tl.to(
        numberRef.current,
        {
          opacity: 1,

          y: 0,

          duration: 0.6,

          ease: "power3.out",
        },
        1.5,
      );

      tl.to(
        nameRef.current,
        {
          opacity: 1,

          y: 0,

          duration: 0.7,

          ease: "power3.out",
        },
        1.65,
      );

      /*
       * ==========================================
       * SECOND MOVEMENT
       *
       * Bottle slowly moves upward.
       * ==========================================
       */

      tl.to(
        bottleRef.current,
        {
          y: -55,

          scale: 1.08,

          duration: 2.5,

          ease: "power1.inOut",
        },
        2.3,
      );

      /*
       * Background atmosphere grows.
       */

      tl.to(
        glowRef.current,
        {
          scale: 1.35,

          opacity: 0.65,

          duration: 2.5,

          ease: "power1.inOut",
        },
        2.3,
      );

      /*
       * ==========================================
       * THIRD MOVEMENT
       *
       * Everything slowly disappears.
       * This prepares the transition into Finale.
       * ==========================================
       */

      tl.to(
        [
          eyebrowRef.current,
          titleRef.current,
          descriptionRef.current,
          numberRef.current,
          nameRef.current,
        ],
        {
          opacity: 0,

          y: -30,

          duration: 1,

          stagger: 0.05,

          ease: "power2.in",
        },
        4.8,
      );

      tl.to(
        bottleRef.current,
        {
          opacity: 0,

          scale: 1.14,

          y: -90,

          duration: 1.4,

          ease: "power2.inOut",
        },
        4.8,
      );

      tl.to(
        glowRef.current,
        {
          opacity: 0,

          scale: 1.5,

          duration: 1.3,

          ease: "power2.in",
        },
        4.9,
      );

      tl.to(
        shadowRef.current,
        {
          opacity: 0,

          duration: 0.8,

          ease: "power2.in",
        },
        4.9,
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="object-section">
      <div className="object-background">
        <img src={objectBg} alt="" draggable="false" />

        <div className="object-darkness" />

        <div ref={glowRef} className="object-glow" />
      </div>

      <header className="object-header">
        <span>THE OBJECT</span>
      </header>

      <div className="object-copy">
        <span ref={eyebrowRef} className="object-eyebrow">
          THE VESSEL
        </span>

        <h2 ref={titleRef} className="object-title">
          A FORM
          <br />
          <em>TO REMEMBER.</em>
        </h2>

        <p ref={descriptionRef} className="object-description">
          Designed to hold more than fragrance. A quiet object shaped by
          proportion, weight and light.
        </p>
      </div>

      <div className="object-bottle-area">
        <div ref={shadowRef} className="object-shadow" />

        <img
          ref={bottleRef}
          src={bottle}
          alt="ÉLANE No.01 perfume bottle"
          className="object-bottle"
          draggable="false"
        />
      </div>

      <div className="object-product">
        <span ref={numberRef} className="object-number">
          ÉLANE / 01
        </span>

        <span ref={nameRef} className="object-name">
          EAU DE PARFUM
        </span>
      </div>
    </section>
  );
}
