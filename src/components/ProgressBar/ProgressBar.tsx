"use client"
import React, { useEffect, useState } from "react";
import { motion, useScroll,  MotionStyle } from "framer-motion";

const useAdjustedScrollProgress = (footerHeight : number) => {
  const { scrollY } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.body.scrollHeight - window.innerHeight - footerHeight;
      const progressValue = Math.min(scrollY.get() / totalHeight, 1);
      setProgress(progressValue);
    };

    const unsubscribeY = scrollY.onChange(handleScroll);
    handleScroll();

    return () => {
      unsubscribeY();
    };
  }, [scrollY, footerHeight]);

  return progress;
};

const ProgressBar = ({ color = "#ea2027", footerHeight = 700 }) => {
  const progress = useAdjustedScrollProgress(footerHeight);

  const progressBarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "10px",
    background: color,
    transformOrigin: "0%",
    zIndex: 9999,
    transform: `scaleX(${progress})`,
  } as MotionStyle;

  return <motion.div style={progressBarStyle} />;
};

export default ProgressBar;
