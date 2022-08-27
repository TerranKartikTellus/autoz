import React, { Children, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Scale({children,initial,final,delay,duration}) {

  const squareVariants = {
  visible: { 
    opacity: 1, 
    scale: final, 
    transition: { duration: duration,delay:delay  } 
    
  },
  hidden: { opacity: 0, scale: initial }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      {children}
    </motion.div>
  );
}