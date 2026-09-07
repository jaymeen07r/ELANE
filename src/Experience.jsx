import "./css/Experience.css";

import experienceVideo from "./assets/experience.mp4";

const experienceSteps = [
    {
        number: "01",
        title: "PACKAGING",
        description: "The first encounter.",
    },
    {
        number: "02",
        title: "BOTTLE",
        description: "Form shaped by restraint.",
    },
    {
        number: "03",
        title: "APPLICATION",
        description: "A moment made personal.",
    },
    {
        number: "04",
        title: "SILLAGE",
        description: "What remains after you leave.",
    },
];

export default function Experience() {
    return (
        <section className="experience-section">

            {/* VIDEO */}

            <video
                className="experience-video"
                src={experienceVideo}
                autoPlay
                muted
                loop
                playsInline
            />

            {/* DARK CINEMATIC OVERLAY */}

            <div className="experience-overlay" />


            {/* TOP LABEL */}

            <div className="experience-top">

                <span>
                    06 — THE ÉLANE EXPERIENCE
                </span>

                <span>
                    BEYOND THE FRAGRANCE
                </span>

            </div>


            {/* MAIN TITLE */}

            <div className="experience-center">

                <span className="experience-eyebrow">
                    THE RITUAL OF SCENT
                </span>

                <h2>
                    MORE THAN
                    <br />
                    <em>A FRAGRANCE.</em>
                </h2>

                <p>
                    From the first touch of the box
                    to the trace left in the air,
                    every detail is part of the experience.
                </p>

            </div>


            {/* EXPERIENCE STEPS */}

            <div className="experience-steps">

                {experienceSteps.map((step) => (

                    <div
                        className="experience-step"
                        key={step.number}
                    >

                        <span className="step-number">
                            {step.number}
                        </span>

                        <div className="step-content">

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}