import { useState } from "react";
import "./css/Notes.css";

import bergamot from "./assets/bergamot.jpg";
import rose from "./assets/rose.jpg";
import iris from "./assets/iris.jpg";
import oud from "./assets/oud.jpg";
import vanilla from "./assets/vanilla.jpg";
import amber from "./assets/amber.jpg";

const notes = [
    {
        name: "BERGAMOT",
        category: "CITRUS · TOP NOTE",
        image: bergamot,
    },
    {
        name: "ROSE",
        category: "FLORAL · HEART NOTE",
        image: rose,
    },
    {
        name: "IRIS",
        category: "POWDERY · HEART NOTE",
        image: iris,
    },
    {
        name: "OUD",
        category: "WOODY · BASE NOTE",
        image: oud,
    },
    {
        name: "VANILLA",
        category: "SWEET · BASE NOTE",
        image: vanilla,
    },
    {
        name: "AMBER",
        category: "WARM · BASE NOTE",
        image: amber,
    },
];

export default function Notes() {
    const [activeNote, setActiveNote] = useState(0);

    return (
        <section className="notes-section">

            {/* HEADER */}

            <div className="notes-header">

                <span className="notes-number">
                    05 — THE NOTES
                </span>

                <span className="notes-caption">
                    THE ESSENCE WITHIN
                </span>

            </div>


            {/* MAIN */}

            <div className="notes-content">

                {/* LEFT */}

                <div className="notes-list">

                    <div className="notes-intro">
                        <h2>
                            A LANGUAGE
                            <br />
                            <em>WITHOUT WORDS.</em>
                        </h2>

                        <p>
                            Every composition begins with a single note.
                            Together, they become an emotion.
                        </p>
                    </div>


                    <div className="note-items">

                        {notes.map((note, index) => (

                            <button
                                className={`note-item ${activeNote === index ? "active" : ""
                                    }`}
                                key={note.name}
                                onMouseEnter={() => setActiveNote(index)}
                                onFocus={() => setActiveNote(index)}
                            >

                                <span className="note-index">
                                    0{index + 1}
                                </span>

                                <span className="note-name">
                                    {note.name}
                                </span>

                                <span className="note-category">
                                    {note.category}
                                </span>

                                <span className="note-arrow">
                                    ↗
                                </span>

                            </button>

                        ))}

                    </div>

                </div>


                {/* RIGHT IMAGE */}

                <div className="notes-visual">

                    {notes.map((note, index) => (

                        <img
                            key={note.name}
                            src={note.image}
                            alt={note.name}
                            className={`note-image ${activeNote === index ? "visible" : ""
                                }`}
                        />

                    ))}


                    <div className="notes-visual-overlay" />

                    <div className="visual-note-name">
                        {notes[activeNote].name}
                    </div>

                    <div className="visual-note-number">
                        0{activeNote + 1}
                    </div>

                </div>

            </div>

        </section>
    );
}