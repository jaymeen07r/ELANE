import "./css/Info.css";
import perfume from "./assets/perfume2.png";

export default function Info() {
    return (
        <section className="house-section">
            <div className="house-content">
                <div className="house-copy">
                    <h2>
                        Fragrance is
                        <br />
                        <em>memory in motion.</em>
                    </h2>
                    <p>
                        ÉLANE is an exploration of emotion through fragrance —
                        composed with rare ingredients, refined through restraint,
                        and created to become part of your story.
                    </p>
                    <span className="house-signature">
                        — ÉLANE
                    </span>
                </div>
                <div className="house-visual">
                    <img src={perfume} alt="ÉLANE fragrance bottle" />
                    <div className="visual-label">
                        <span>ÉLANE</span>
                        <span>THE HOUSE OF SCENT</span>
                    </div>
                </div>
            </div>
        </section>
    );
}