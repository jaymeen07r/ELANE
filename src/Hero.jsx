import { useRef, useState } from "react";
import hero from "./assets/hero.png";
// import hero from "./assets/video.mp4";
import "./Hero.css";

export default function Hero() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio could not play:", error);
      }
    }
  };

  return (
    <section className="hero">

      <img src={hero} className="hero-img" />
      <div className="hero-content">
        <h1 className="hero-title">
          Every scent tells a story.
          <br />
          <em className="em-2">
            Make yours unforgettable.
          </em>
        </h1>

        <p className="hero-subtitle">
          Inspired by emotion, crafted with precision, and designed to linger in
          memory long after the first encounter.
        </p>
        <button className="cta">
          COLLECTIONS ↗
        </button>
      </div>
    </section>
  );
}