import "./css/Journal.css";

import journalHero from "./assets/journal-hero.jpg";
import composition from "./assets/composition.jpg";
import notes from "./assets/journal-notes.jpg";
import memory from "./assets/journal-memory.jpg";

const articles = [
    {
        number: "01",
        category: "CRAFT",
        title: "The Art of Perfumery",
        description:
            "Where tradition, precision, and imagination meet to create something unforgettable.",
        image: journalHero,
        featured: true,
    },
    {
        number: "02",
        category: "COMPOSITION",
        title: "Inside an ÉLANE Composition",
        description:
            "A closer look at the layers, balance, and intention behind a signature scent.",
        image: composition,
    },
    {
        number: "03",
        category: "NOTES",
        title: "The Stories Behind Our Notes",
        description:
            "From bergamot to oud, discover the ingredients that give every composition its character.",
        image: notes,
    },
    {
        number: "04",
        category: "MEMORY",
        title: "How a Fragrance Becomes a Memory",
        description:
            "Why certain scents stay with us long after the moment has passed.",
        image: memory,
    },
];

export default function Journal() {
    return (
        <section className="journal-section">

            {/* HEADER */}

            <div className="journal-header">

                <div className="journal-heading">

                    <span className="journal-number">
                        07 — THE JOURNAL
                    </span>

                    <h2>
                        STORIES
                        <br />
                        <em>OF SCENT.</em>
                    </h2>

                </div>

                <p className="journal-intro">
                    A collection of stories, ideas, and
                    <br />
                    discoveries from the world of ÉLANE.
                </p>

            </div>


            {/* ARTICLES */}

            <div className="journal-grid">

                {articles.map((article) => (

                    <article
                        className={`journal-card ${article.featured ? "featured" : ""
                            }`}
                        key={article.number}
                    >

                        {/* IMAGE */}

                        <div className="journal-image">

                            <img
                                src={article.image}
                                alt={article.title}
                            />

                            <div className="journal-image-overlay" />

                        </div>


                        {/* TOP META */}

                        <div className="journal-meta">

                            <span>
                                {article.number}
                            </span>

                            <span>
                                {article.category}
                            </span>

                            <span className="journal-arrow">
                                ↗
                            </span>

                        </div>


                        {/* CONTENT */}

                        <div className="journal-content">

                            <h3>
                                {article.title}
                            </h3>

                            <p>
                                {article.description}
                            </p>

                            <span className="journal-read">
                                READ STORY
                            </span>

                        </div>

                    </article>

                ))}

            </div>


            {/* FOOTER LINE */}

            <div className="journal-footer">

                <span>
                    ÉLANE — STORIES OF SCENT
                </span>

                <span>
                    EXPLORE THE JOURNAL ↗
                </span>

            </div>

        </section>
    );
}