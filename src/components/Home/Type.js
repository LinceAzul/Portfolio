import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineer",
          "Cybersecurity Enthusiast",
          "Offensive Security Practitioner",
          "Persistent Challenge Seeker",
          "Curious Explorer of AI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
