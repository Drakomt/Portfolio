import "./Typewriter.css";
import TypewriterEffect from "typewriter-effect";

function Typewriter() {
  return (
    <TypewriterEffect
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Full-Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typewriter;
