import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/Footer.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const navRef = useRef(null);
  const metaRef = useRef(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.92,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center",
      });

      gsap.set(navRef.current.children, {
        opacity: 0,
        y: 20,
      });

      gsap.set(metaRef.current, {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,

          start: "top 80%",

          end: "bottom bottom",

          scrub: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
       * ==========================================
       * EYEBROW
       * ==========================================
       */

      tl.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0,
      );

      /*
       * ==========================================
       * ÉLANE WORDMARK
       * ==========================================
       */

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        0.15,
      );

      /*
       * ==========================================
       * DIVIDER
       * ==========================================
       */

      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0.8,
      );

      /*
       * ==========================================
       * NAVIGATION
       * ==========================================
       */

      tl.to(
        navRef.current.children,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        1,
      );

      /*
       * ==========================================
       * META
       * ==========================================
       */

      tl.to(
        metaRef.current,
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        1.45,
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      {/* ==========================================
          TOP LABEL
      =========================================== */}

      <div ref={eyebrowRef} className="footer-eyebrow">
        THE HOUSE OF ÉLANE
      </div>

      {/* ==========================================
          MAIN WORDMARK
      =========================================== */}

      <div className="footer-wordmark-wrap">
        <h2 ref={titleRef} className="footer-wordmark">
          ÉLANE
        </h2>
      </div>

      {/* ==========================================
          DIVIDER
      =========================================== */}

      <div ref={lineRef} className="footer-line" />

      {/* ==========================================
          NAVIGATION
      =========================================== */}

      <nav ref={navRef} className="footer-nav">
        <a href="#collections">COLLECTIONS</a>

        <a href="#house">THE HOUSE</a>

        <a href="#craft">THE CRAFT</a>

        <a href="#archive">THE ARCHIVE</a>

        <a href="#journal">JOURNAL</a>

        <a href="#contact">CONTACT</a>
      </nav>

      {/* ==========================================
          BOTTOM
      =========================================== */}

      <div ref={metaRef} className="footer-bottom">
        <span>ÉLANE PARFUMS</span>

        <span>MAKE YOURS UNFORGETTABLE.</span>

        <span>© 2026 ÉLANE</span>
      </div>
    </footer>
  );
}
