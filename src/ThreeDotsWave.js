import React from "react";
import { motion } from "framer-motion";

const anim1BlockStyle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "black",
  borderRadius: "0.25rem"
};

const threeDotsWaveParent = {
  start: {
    transition: {
      staggerChildren: 0.1
    }
  },
  end: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const animationVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "250%"
  }
};

const threeDotsWaveTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut"
};

export default function ThreeDotsWave() {
  return (
    <motion.div
      style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around"
      }}
      variants={threeDotsWaveParent}
      initial="start"
      animate="end"
    >
      <motion.span
        variants={animationVariants}
        transition={threeDotsWaveTransition}
        style={anim1BlockStyle}
      />
      <motion.span
        variants={animationVariants}
        style={anim1BlockStyle}
        transition={threeDotsWaveTransition}
      />
      <motion.span
        variants={animationVariants}
        style={anim1BlockStyle}
        transition={threeDotsWaveTransition}
      />
    </motion.div>
  );
}
