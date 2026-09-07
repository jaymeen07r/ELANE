import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./css/SiteCredits.css";

import creditsImage from "./assets/finale.jpg";

export default function SiteCredits() {
    const navigate = useNavigate();

    const creditsRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const credits = creditsRef.current;

        if (!credits) return;

        let position = 0;
        let lastTime = performance.now();

        // Lower = slower / more cinematic
        const speed = 0.1;

        const animate = (currentTime) => {
            const delta = currentTime - lastTime;
            lastTime = currentTime;

            position += delta * speed;

            credits.style.transform = `translate3d(0, ${-position}px, 0)`;

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <main className="site-credits">

            {/* BACKGROUND */}
            <div className="credits-background">
                <img
                    src={creditsImage}
                    alt=""
                    draggable="false"
                />

                <div className="credits-darkness" />
                <div className="credits-vignette" />
            </div>


            {/* TOP FADE */}
            <div className="credits-top-fade" />


            {/* CREDITS */}
            <div
                ref={creditsRef}
                className="credits-scroll"
            >

                {/* INTRO */}
                <section className="credits-block credits-intro">

                    <div className="credits-small">
                        ÉLANE
                    </div>

                    <h1>
                        SITE
                        <br />
                        <em>CREDITS</em>
                    </h1>

                    <div className="credits-line" />

                    <p>
                        An independent exploration
                        <br />
                        of fragrance, image and motion.
                    </p>

                </section>


                {/* BRAND */}
                    <section className="credits-block">

                        <span className="credits-label">
                            THE HOUSE
                        </span>

                        <h2>
                            ÉLANE
                        </h2>

                        <p>
                            A fictional fragrance house created
                            as a digital experience.
                        </p>

                    </section>


                {/* CONCEPT */}
                <section className="credits-block">

                    <span className="credits-label">
                        CONCEPT & DIRECTION
                    </span>

                    <h2>
                        THE ART
                        <br />
                        OF SCENT
                    </h2>

                    <p>
                        A visual exploration of fragrance,
                        emotion, atmosphere and memory.
                    </p>

                </section>


                {/* DESIGN */}
                <section className="credits-block">

                    <span className="credits-label">
                        DESIGN
                    </span>

                    <h2>
                        DIGITAL
                        <br />
                        EXPERIENCE
                    </h2>

                    <p>
                        Art direction
                        <br />
                        Visual identity
                        <br />
                        Interaction design
                        <br />
                        Motion direction
                    </p>

                </section>


                {/* DEVELOPMENT */}
                <section className="credits-block">

                    <span className="credits-label">
                        DEVELOPMENT
                    </span>

                    <h2>
                        JAYMEEN
                    </h2>

                    <p>
                        Creative development
                        <br />
                        Frontend engineering
                        <br />
                        Interaction
                        <br />
                        Animation
                    </p>

                </section>


                {/* TECHNOLOGY */}
                <section className="credits-block">

                    <span className="credits-label">
                        BUILT WITH
                    </span>

                    <h2>
                        REACT
                        <br />
                        GSAP
                    </h2>

                    <p>
                        React
                        <br />
                        GSAP & ScrollTrigger
                        <br />
                        CSS
                        <br />
                        Vite
                    </p>

                </section>


                {/* TYPOGRAPHY */}
                <section className="credits-block">

                    <span className="credits-label">
                        TYPOGRAPHY
                    </span>

                    <h2>
                        TYPE
                        <br />
                        & FORM
                    </h2>

                    <p>
                        Cormorant Garamond
                        <br />
                        Manrope
                        <br />
                        Editorial typography
                    </p>

                </section>


                {/* IMAGE CREDITS */}
                <section className="credits-block">

                    <span className="credits-label">
                        IMAGE CREDITS
                    </span>

                    <h2>
                        VISUAL
                        <br />
                        SOURCES
                    </h2>

                    <p>
                        Selected imagery sourced from
                        <br />
                        Pinterest for visual exploration
                        <br />
                        and reference.
                    </p>

                </section>


                {/* NOTE */}
                <section className="credits-block credits-note">

                    <span className="credits-label">
                        NOTE
                    </span>

                    <p>
                        ÉLANE is a conceptual digital
                        fragrance experience.
                    </p>

                    <p>
                        The brand, products and compositions
                        presented throughout this website
                        are part of the creative concept.
                    </p>

                </section>


                {/* FINAL */}
                <section className="credits-block credits-final">

                    <div className="credits-symbol">
                        É
                    </div>

                    <h2>
                        ÉLANE
                    </h2>

                    <p>
                        MAKE YOURS UNFORGETTABLE.
                    </p>

                    <div className="credits-final-line" />

                    <button
                        onClick={() => navigate("/")}
                        className="credits-return"
                    >
                        RETURN TO ÉLANE
                        <span>↗</span>
                    </button>

                </section>

            </div>


            {/* FIXED HEADER */}
            <div className="credits-ui">

                <div className="credits-ui-brand">
                    ÉLANE
                </div>

                <button
                    className="credits-close"
                    onClick={() => navigate("/")}
                >
                    CLOSE
                    <span>×</span>
                </button>

            </div>

        </main>
    );
}