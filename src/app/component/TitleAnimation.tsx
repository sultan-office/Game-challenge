"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

type propsType = {
  title: string;
};

const TitleAnimation = ({ title }: propsType) => {
  const ref = useRef(null);

  const splitTitle: string[] = title ? title.split("") : [];
  return (
    <>
      {[...splitTitle].map((chr: string, index: number) => {
        return (
          <motion.span
            ref={ref}
            key={index}
            className="text-inherit inline-block"
            initial={{ transform: "translateY(100px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0px)", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay : (index+1) / 70
              
            }}
          >
            {chr}
          </motion.span>
        );
      })}
    </>
  );
};

export default TitleAnimation;
