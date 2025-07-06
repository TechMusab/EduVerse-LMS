import {
    CircularProgressbar,
    buildStyles,
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  export default function Progressbar({bg}) {
    const percentage = 70; 
  
    return (
      <div className="w-12 h-12">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: bg,        // primary color
            textColor: "#1e293b",        // dark text
            trailColor: "#e5e7eb",       // gray-200
          })}
        />
      </div>
    );
  }
  