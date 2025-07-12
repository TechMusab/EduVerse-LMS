import React, { useEffect, useState } from "react";
import { 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaExclamationCircle, 
  FaInfoCircle,
  FaTimes 
} from "react-icons/fa";

export default function Toast({ message, type = "info", onClose, duration = 4000 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto dismiss
    const dismissTimer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(dismissTimer);
    };
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const getToastConfig = () => {
    switch (type) {
      case "success":
        return {
          icon: FaCheckCircle,
          gradient: "gradient-success",
          borderColor: "border-green-200",
          iconColor: "text-green-600",
          bgColor: "bg-green-50"
        };
      case "error":
        return {
          icon: FaExclamationCircle,
          gradient: "gradient-error",
          borderColor: "border-red-200",
          iconColor: "text-red-600",
          bgColor: "bg-red-50"
        };
      case "warning":
        return {
          icon: FaExclamationTriangle,
          gradient: "gradient-warning",
          borderColor: "border-yellow-200",
          iconColor: "text-yellow-600",
          bgColor: "bg-yellow-50"
        };
      default:
        return {
          icon: FaInfoCircle,
          gradient: "gradient-primary",
          borderColor: "border-blue-200",
          iconColor: "text-blue-600",
          bgColor: "bg-blue-50"
        };
    }
  };

  const config = getToastConfig();
  const IconComponent = config.icon;

  return (
    <div className={`fixed top-6 right-6 z-[9999] transition-all duration-300 ease-out ${
      isVisible && !isExiting 
        ? "translate-x-0 opacity-100" 
        : "translate-x-full opacity-0"
    }`}>
      {/* Toast Container */}
      <div className={`
        relative min-w-[320px] max-w-[420px] p-4 rounded-xl shadow-2xl
        border border-white/20 backdrop-blur-xl
        ${config.bgColor} ${config.borderColor}
        animate-slide-up
      `}>
        {/* Gradient accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl ${config.gradient}`} />
        
        {/* Content */}
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className={`flex-shrink-0 p-2 rounded-full bg-white/80 backdrop-blur-sm ${config.iconColor}`}>
            <IconComponent size={16} />
          </div>
          
          {/* Message */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text leading-relaxed">
              {message}
            </p>
          </div>
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1.5 rounded-full bg-white/60 hover:bg-white/80 
                     text-muted hover:text-text transition-all duration-200
                     backdrop-blur-sm group"
          >
            <FaTimes size={12} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 rounded-b-xl overflow-hidden">
          <div 
            className={`h-full ${config.gradient} transition-all duration-300 ease-linear`}
            style={{
              width: isExiting ? '0%' : '100%',
              transitionDuration: isExiting ? '300ms' : `${duration}ms`
            }}
          />
        </div>
      </div>
    </div>
  );
} 