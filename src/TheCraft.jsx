import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/TheCraft.css";

import craft01 from "./assets/craft-01.jpg";
import craft02 from "./assets/craft-02.jpg";
import craft03 from "./assets/craft-03.jpg";
import craft04 from "./assets/craft-04.jpg";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    number: "01",
    title: "THE MATERIAL",
    description:
      "Every composition begins with the character of its raw materials.",
    note: "BERGAMOT · IRIS · OUD",
    image: craft01,
  },
  {
    number: "02",
    title: "THE COMPOSITION",
    description:
      "Notes are balanced, layered and refined until they become one expression.",
    note: "PROPORTION · BALANCE · DEPTH",
    image: craft02,
  },
  {
    number: "03",
    title: "THE PATIENCE",
    description:
      "Time allows the composition to settle, mature and reveal its true character.",
    note: "TIME · RESTRAINT · PRECISION",
    image: craft03,
  },
  {
    number: "04",
    title: "THE SIGNATURE",
    description:
      "What remains is a scent designed to become unmistakably yours.",
    note: "ÉLANE · PARFUM · MEMORY",
    image: craft04,
  },
];

export default function TheCraft() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const stageRefs = useRef([]);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current;
      const stagesElements = stageRefs.current;

      /*
       * Initial state
       */

      gsap.set(images, {
        opacity: 0,
        scale: 1.08,
      });

      gsap.set(images[0], {
        opacity: 1,
        scale: 1,
      });

      gsap.set(stagesElements, {
        opacity: 0,
        y: 40,
      });

      gsap.set(stagesElements[0], {
        opacity: 1,
        y: 0,
      });

      gsap.set(progressRef.current, {
        scaleX: 0.25,
        transformOrigin: "left center",
      });

      /*
       * Main timeline
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: `+=${stages.length * 900}`,

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      stages.forEach((_, index) => {
        if (index === 0) return;

        /*
         * Previous image leaves
         */

        tl.to(
          images[index - 1],
          {
            opacity: 0,
            scale: 1.04,
            duration: 1,
            ease: "power2.inOut",
          },
          `stage-${index}`,
        );

        /*
         * New image enters
         */

        tl.fromTo(
          images[index],
          {
            opacity: 0,
            scale: 1.12,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          `stage-${index}`,
        );

        /*
         * Previous typography leaves
         */

        tl.to(
          stagesElements[index - 1],
          {
            opacity: 0,
            y: -40,
            duration: 0.5,
            ease: "power2.in",
          },
          `stage-${index}`,
        );

        /*
         * New typography enters
         */

        tl.fromTo(
          stagesElements[index],
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          `stage-${index}+=0.35`,
        );

        /*
         * Progress
         */

        tl.to(
          progressRef.current,
          {
            scaleX: (index + 1) / stages.length,
            duration: 1,
            ease: "none",
          },
          `stage-${index}`,
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="craft">
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="craft-background">
        {stages.map((stage, index) => (
          <img
            key={stage.number}
            ref={(element) => {
              imageRefs.current[index] = element;
            }}
            src={stage.image}
            alt=""
            className="craft-image"
            draggable="false"
          />
        ))}

        <div className="craft-overlay" />
      </div>

      {/* =========================================
          HEADER
      ========================================== */}

      <div className="craft-header">
        <span className="craft-eyebrow">THE CRAFT</span>

      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div className="craft-content">
        <div className="craft-stages">
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              ref={(element) => {
                stageRefs.current[index] = element;
              }}
              className="craft-stage"
            >
              <span className="craft-number">{stage.number}</span>

              <h2 className="craft-title">{stage.title}</h2>

              <p className="craft-description">{stage.description}</p>

              <span className="craft-note">{stage.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          FOOTER / PROGRESS
      ========================================== */}

      <div className="craft-footer">
        <span>ÉLANE PARFUMS</span>

        <div className="craft-progress">
          <div ref={progressRef} className="craft-progress-fill" />
        </div>
      </div>
    </section>
  );
}
