import "./css/Collections.css";

import eclat from "./assets/eclat.jpg";
import noir from "./assets/noir.jpg";
import ether from "./assets/ether.jpg";
import sillage from "./assets/sillage.jpg";

const collections = [
    {
        number: "01",
        name: "ÉCLAT",
        description: "Bright · Citrus · Contemporary",
        image: eclat,
    },
    {
        number: "02",
        name: "NOIR",
        description: "Dark · Oud · Mysterious",
        image: noir,
    },
    {
        number: "03",
        name: "ÉTHER",
        description: "Soft · Floral · Ethereal",
        image: ether,
    },
    {
        number: "04",
        name: "SILLAGE",
        description: "Warm · Amber · Sensual",
        image: sillage,
    },
];

export default function Collections() {
    return (
        <section className="collections-section">

            <div className="collections-header">
                <div>
                    <span className="collections-number">
                        COLLECTIONS
                    </span>
                </div>

                <p>
                    Four expressions.

                    One signature.
                </p>
            </div>


            <div className="collections-grid">

                {collections.map((collection) => (
                    <article
                        className="collection-card"
                        key={collection.number}
                    >

                        <img
                            src={collection.image}
                            alt={`${collection.name} fragrance collection`}
                        />

                        <div className="collection-overlay" />

                        <div className="collection-top">
                            <span>{collection.number}</span>

                            <span className="collection-arrow">
                                ↗
                            </span>
                        </div>

                        <div className="collection-info">

                            <h2>
                                {collection.name}
                            </h2>

                            <p>
                                {collection.description}
                            </p>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}