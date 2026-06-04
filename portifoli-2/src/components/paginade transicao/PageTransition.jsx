import { motion } from "framer-motion";

export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.98,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}