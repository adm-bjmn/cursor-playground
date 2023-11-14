"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Home() {
  // Set initial mouse position & default state
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  /**
   * Event listener mousemove gets mouse position
   *
   * mouseMove Function sets setMousePosition state by
   * getting Client data from event listener and setting x & y Values.
   *
   **/
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // mousePosition current state used to set the varient for framer motion.
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#EC008C",
    },
    divPink: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 70,
      height: 150,
      width: 150,
      backgroundColor: "#fff",
    },
  };

  const [cursorVariant, setCursorVariant] = useState("default");
  const divPinkEnter = () => setCursorVariant("divPink");
  const divPinkLeave = () => setCursorVariant("default");
  return (
    <main className="flex min-h-screen flex-col">
      <motion.div className="cursor" variants={variants} animate={cursorVariant} />
      <div className="h-96 w-full bg-white flex justify-center items-center"></div>
      <div
        onMouseEnter={divPinkEnter}
        onMouseLeave={divPinkLeave}
        className="h-96 bg-pink w-full"
      ></div>
    </main>
  );
}
