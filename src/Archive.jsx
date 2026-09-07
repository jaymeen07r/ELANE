import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/Archive.css";

import archive01 from "./assets/noir.jpg";
import archive02 from "./assets/no2.png";
import archive03 from "./assets/vanilla.jpg";
import archive04 from "./assets/sillage.jpg";

gsap.registerPlugin(ScrollTrigger);

const archiveItems = [
  {
    number: "01",
    title: "FORM",
    year: "MMXXVI",
    image: archive01,
    text: "Where an idea first takes shape.",
  },
  {
    number: "02",
    title: "MATERIAL",
    year: "MMXXVI",
    image: archive02,
    text: "The textures that give a composition its character.",
  },
  {
    number: "03",
    title: "MEMORY",
    year: "MMXXVI",
    image: archive03,
    text: "Fragments of moments translated into scent.",
  },
  {
    number: "04",
    title: "NIGHT",
    year: "MMXXVI",
    image: archive04,
    text: "The darker side of ÉLANE.",
  },
];

export default function Archive() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const items = itemsRef.current;

      /*
       * Horizontal travel amount.
       */
      const getDistance = () => {
        return track.scrollWidth - window.innerWidth;
      };

      /*
       * Initial state.
       */
      gsap.set(track, {
        x: 0,
      });

      /*
       * Horizontal archive movement.
       */
      const horizontalTween = gsap.to(track, {
        x: () => -getDistance(),

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () => `+=${getDistance() * 1.35}`,

          pin: true,

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress = self.progress;

            /*
             * Determine which archive item
             * is currently closest to the center.
             */
            const index = Math.min(
              archiveItems.length - 1,
              Math.floor(progress * archiveItems.length),
            );

            items.forEach((item, itemIndex) => {
              if (!item) return;

              const active = itemIndex === index;

              gsap.to(item, {
                opacity: active ? 1 : 0.35,

                scale: active ? 1 : 0.96,

                duration: 0.35,

                overwrite: true,

                ease: "power2.out",
              });
            });
          },
        },
      });

      /*
       * Subtle depth on archive cards.
       */
      items.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            y: index % 2 === 0 ? 30 : -30,
          },
          {
            y: index % 2 === 0 ? -30 : 30,

            ease: "none",

            scrollTrigger: {
              trigger: section,

              start: "top top",

              end: () => `+=${getDistance() * 1.35}`,

              scrub: 1,

              invalidateOnRefresh: true,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="archive">
      {/* =========================================
          HEADER
      ========================================== */}

      <header className="archive-header">
        <span className="archive-label">THE ARCHIVE</span>
      </header>

      {/* =========================================
          INTRO
      ========================================== */}

      <div className="archive-intro">
        <span className="archive-intro-small">AN ONGOING COLLECTION</span>

        <h2>
          SOME THINGS
          <br />
          <em>REMAIN.</em>
        </h2>
      </div>

      <div ref={trackRef} className="archive-track">
        {/* Empty opening space */}

        <div className="archive-spacer" />

        {archiveItems.map((item, index) => (
          <article
            key={item.number}
            ref={(element) => {
              itemsRef.current[index] = element;
            }}
            className="archive-item"
          >
            {/* Image */}

            <div className="archive-image-wrap">
              <img
                src={item.image}
                alt=""
                className="archive-image"
                draggable="false"
              />

              <div className="archive-image-number">{item.number}</div>
            </div>

            {/* Metadata */}

            <div className="archive-meta">
              <span>{item.year}</span>

              <span>ARCHIVE / {item.number}</span>
            </div>

            {/* Title */}

            <h3 className="archive-title">{item.title}</h3>

            {/* Description */}

            <p className="archive-text">{item.text}</p>
          </article>
        ))}

        {/* Closing space */}

        <div className="archive-end" />
      </div>
    </section>
  );
}
