 
  export default function Progressbar({bg}) {
    const percentage = 70; 
  
    return (
      <div className="w-12 h-12">
        <div className="w-full h-full bg-border rounded-full">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  }
  