import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import one from "./assets/c.png";
import two from "./assets/np.png";
import three from "./assets/pc.png";
import bg1 from "./assets/1.png";
import bg2 from "./assets/2.png";
import bg3 from "./assets/3.png";
import bg4 from "./assets/4.png";
import bg5 from "./assets/5.png";
import paperTexture from "./assets/paperTexture.png";
import hero from "./assets/hero.png";
import hero2 from "./assets/hero2.png";

import "./css/TimeTransition.css";

gsap.registerPlugin(ScrollTrigger);

export default function TimeTransition() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4500",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Initial state
      gsap.set(".photo", {
        opacity: 0,
        scale: 0.6,
      });

      // =====================
      // PHOTOS APPEAR
      // =====================

      tl.fromTo(
        ".photo-1",
        {
          opacity: 0,
          scale: 0.6,
          rotate: -12,
          y: 100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
        },
      )

        .fromTo(
          ".photo-2",
          {
            opacity: 0,
            scale: 0.6,
            rotate: 8,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
          },
          "-=0.4",
        )

        .fromTo(
          ".photo-3",
          {
            opacity: 0,
            scale: 0.6,
            rotate: -6,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
          },
          "-=0.4",
        )

        .fromTo(
          ".photo-4",
          {
            opacity: 0,
            scale: 0.6,
            rotate: 10,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
          },
          "-=0.4",
        )

        .fromTo(
          ".photo-5",
          {
            opacity: 0,
            scale: 0.4,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
          },
          "-=0.2",
        )

        // =====================
        // CAMERA PUSH-IN
        // =====================

        .to(
          ".photo-5",
          {
            scale: 1.4,
            duration: 2,
          },
          "+=0.5",
        )

        // =====================
        // MEMORIES FLY AWAY
        // =====================

        .to(
          ".photo-1",
          {
            x: -1200,
            y: -800,
            rotate: -35,
            opacity: 0,
            duration: 4,
          },
          "<",
        )

        .to(
          ".photo-2",
          {
            x: 1200,
            y: -700,
            rotate: 40,
            opacity: 0,
            duration: 4,
          },
          "<",
        )

        .to(
          ".photo-3",
          {
            x: -1000,
            y: 900,
            rotate: -30,
            opacity: 0,
            duration: 4,
          },
          "<",
        )

        .to(
          ".photo-4",
          {
            x: 1200,
            y: 800,
            rotate: 30,
            opacity: 0,
            duration: 4,
          },
          "<",
        )

        // =====================
        // MAIN PHOTO BECOMES PORTAL
        // =====================

        .to(
          ".photo-5",
          {
            scale: 7,
            opacity: 1,
            duration: 5,
          },
          "-=2",
        )

        .to(
          ".hero-bg-1",
          {
            opacity: 0,
            duration: 2,
          },
          "-=1",
        )

        .to(
          ".hero-bg-2",
          {
            opacity: 1,
            duration: 2,
          },
          "<",
        )

        .to(
          ".hero-bg-2",
          {
            opacity: 1,
            scale: 1,
            duration: 3,
          },
          "-=2",
        )

        .to(
          ".photo-5",
          {
            scale: 10,
            opacity: 0,
            duration: 5,
          },
          "-=2",
        )

        .to(
          ".bg-modern",
          {
            opacity: 1,
            duration: 4,
          },
          "-=3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="time-transition">
      <div className="bg-old"></div>

      <div className="bg-modern"></div>
      <div className="hero-bg hero-bg-1">
        <img src={hero} alt="" />
      </div>

      <div className="hero-bg hero-bg-2">
        <img src={hero2} alt="" />
      </div>

      <div className="old-atmosphere"></div>
      {/* <div className="ambient-light"></div> */}

      <div className="photo photo-1">
        <img src={bg1} alt="" />
        <img src={paperTexture} className="paper-edge" alt="" />
      </div>

      <div className="photo photo-2">
        <img src={bg2} alt="" />
        <img src={paperTexture} className="paper-edge" alt="" />
      </div>

      <div className="photo photo-3">
        <img src={bg3} alt="" />
        <img src={paperTexture} className="paper-edge" alt="" />
      </div>

      <div className="photo photo-4">
        <img src={bg4} alt="" />
        <img src={paperTexture} className="paper-edge" alt="" />
      </div>

      <div className="photo photo-5">
        <img src={bg5} alt="" />
        <img src={paperTexture} className="paper-edge" alt="" />
      </div>

      {/* <div className="transition-glow"></div> */}
    </section>
  );
}
