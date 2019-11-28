import React from "react";
import { motion } from "framer-motion";

const containerStyle = {
  position: "relative",
  width: "3rem",
  height: "3rem",
  boxSizing: "border-box"
};

const ringStyle = {
  display: "block",
  width: "3rem",
  height: "3rem",
  border: "0.1rem dashed #EBBCAE",
  borderRadius: "50%",
  position: "relative",
  boxSizing: "border-box",
  maskImage: "conic-gradient(#fff, #000)"
};

const planetStyle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "#F56D5F",
  borderRadius: "0.5rem",
  position: "absolute",
  top: "-0.25rem",
  left: "calc(50% - 0.25rem)"
};

const sunStyle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  borderRadius: "0.5rem",
  backgroundColor: "#F5D65F",
  position: "absolute",
  top: "calc(50% - 0.5rem)",
  left: "calc(50% - 0.5rem)"
};

const orbitContainer = {
  position: "relative",
  width: "100%",
  height: "100%"
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 2
};

export default function SolarSystem() {
  return (
    <div style={containerStyle}>
      <div style={ringStyle}>
        <motion.div
          style={orbitContainer}
          animate={{ rotate: 360 }}
          transition={spinTransition}
        >
          <span style={planetStyle} />
        </motion.div>
        <div style={sunStyle}></div>
      </div>
    </div>
  );
}
