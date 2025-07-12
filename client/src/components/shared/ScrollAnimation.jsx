import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

// Scroll-triggered animation component
export const ScrollAnimated = ({ 
  children, 
  className, 
  threshold = 0.1, 
  triggerOnce = true,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  ...props 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    fadeInDown: {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay, ease: "easeOut" }
    },
    slideUp: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: "easeOut" }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={controls}
      variants={selectedAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered list animation
export const StaggeredList = ({ 
  children, 
  className, 
  staggerDelay = 0.1,
  threshold = 0.1,
  triggerOnce = true,
  ...props 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={controls}
      variants={{
        animate: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered list item
export const StaggeredItem = ({ 
  children, 
  className, 
  animation = "fadeInUp",
  ...props 
}) => {
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <motion.div
      className={className}
      variants={selectedAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Counter animation
export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  className,
  prefix = "",
  suffix = "",
  ...props 
}) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className} {...props}>
      {prefix}{count}{suffix}
    </span>
  );
};

// Progress bar animation
export const AnimatedProgressBar = ({ 
  progress, 
  className,
  duration = 1,
  ...props 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className} {...props}>
      <motion.div
        className="h-full bg-primary-500 rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration, ease: "easeOut" }}
      />
    </div>
  );
}; 