import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120
};

export default function Image(props) {
    const [isOpen, setOpen] = useState(false);

    //if (typeof window !== "undefined") {
     //   useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));
    //}

  return (
    <div className={`image-container ${isOpen ? "open" : ""}`}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="shade"
        onClick={() => setOpen(false)}
      />
      <motion.img
        src={props.image}
        alt="Bimhuis in Amsterdam"
        onClick={() => setOpen(!isOpen)}
        layout
        transition={transition}
      />
    </div>
  );
};
