import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const slideUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Stagger animation for lists
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
};

export const hoverLift = {
  whileHover: { 
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  },
  transition: { duration: 0.2 }
};

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 0 30px rgba(102, 126, 234, 0.3)"
  },
  transition: { duration: 0.2 }
};

// Animated Components
export const AnimatedDiv = ({ children, className, variant = fadeInUp, ...props }) => (
  <motion.div
    className={className}
    variants={variant}
    initial="initial"
    animate="animate"
    exit="exit"
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedSection = ({ children, className, variant = fadeInUp, ...props }) => (
  <motion.section
    className={className}
    variants={variant}
    initial="initial"
    animate="animate"
    exit="exit"
    {...props}
  >
    {children}
  </motion.section>
);

export const AnimatedCard = ({ children, className, ...props }) => (
  <motion.div
    className={className}
    variants={scaleIn}
    initial="initial"
    animate="animate"
    exit="exit"
    whileHover="whileHover"
    whileTap="whileTap"
    {...hoverScale}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedButton = ({ children, className, ...props }) => (
  <motion.button
    className={className}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    {...props}
  >
    {children}
  </motion.button>
);

export const AnimatedImage = ({ src, alt, className, ...props }) => (
  <motion.img
    src={src}
    alt={alt}
    className={className}
    variants={scaleIn}
    initial="initial"
    animate="animate"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3 }}
    {...props}
  />
);

export const AnimatedList = ({ children, className, ...props }) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedListItem = ({ children, className, ...props }) => (
  <motion.div
    className={className}
    variants={fadeInUp}
    {...hoverLift}
    {...props}
  >
    {children}
  </motion.div>
);

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.3 }
};

export const AnimatedPage = ({ children, className, ...props }) => (
  <motion.div
    className={className}
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    {...props}
  >
    {children}
  </motion.div>
);

// Modal animations
export const modalAnimation = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 50 },
  transition: { duration: 0.3, ease: "easeOut" }
};

export const AnimatedModal = ({ children, className, ...props }) => (
  <motion.div
    className={className}
    variants={modalAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    {...props}
  >
    {children}
  </motion.div>
);

// Loading animations
export const loadingAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const AnimatedLoader = ({ className, ...props }) => (
  <motion.div
    className={className}
    variants={loadingAnimation}
    animate="animate"
    {...props}
  />
);

// Parallax effect
export const ParallaxSection = ({ children, className, speed = 0.5, ...props }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  
  return (
    <motion.div
      className={className}
      style={{ y }}
      {...props}
    >
      {children}
    </motion.div>
  );
}; 