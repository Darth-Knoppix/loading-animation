import React from "react";
import { motion } from "framer-motion";

const anim1BlockStyle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "black",
  borderRadius: "0.5rem"
};

const threeDotsWaveTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8
  }
};

export default function BouncingBall() {
  return (
    <div
      style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <motion.span
        transition={threeDotsWaveTransition}
        style={anim1BlockStyle}
        animate={{
          backgroundColor: ["rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,0,0)"],
          y: ["100%", "-100%"]
        }}
      />
    </div>
  );
}
