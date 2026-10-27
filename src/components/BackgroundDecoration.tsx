export function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg 
        className="absolute w-full h-full opacity-[0.06]" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved lines */}
        <path
          d="M 100 200 Q 300 100 500 250 T 900 300"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-ink animate-[float_20s_ease-in-out_infinite]"
        />
        <path
          d="M 200 600 Q 400 500 600 650 T 1000 700"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-ink animate-[float_25s_ease-in-out_infinite_reverse]"
          style={{ animationDelay: '5s' }}
        />
        <path
          d="M 50 400 Q 250 350 450 450 T 850 500"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-ink animate-[float_30s_ease-in-out_infinite]"
          style={{ animationDelay: '10s' }}
        />
        
        {/* Small circles */}
        <circle 
          cx="150" 
          cy="150" 
          r="4" 
          fill="currentColor" 
          className="text-accent animate-[float_15s_ease-in-out_infinite]"
        />
        <circle 
          cx="800" 
          cy="400" 
          r="3" 
          fill="currentColor" 
          className="text-accent animate-[float_18s_ease-in-out_infinite]"
          style={{ animationDelay: '3s' }}
        />
        <circle 
          cx="400" 
          cy="700" 
          r="5" 
          fill="currentColor" 
          className="text-accent animate-[float_22s_ease-in-out_infinite]"
          style={{ animationDelay: '7s' }}
        />
        <circle 
          cx="1100" 
          cy="200" 
          r="4" 
          fill="currentColor" 
          className="text-accent animate-[float_20s_ease-in-out_infinite]"
          style={{ animationDelay: '12s' }}
        />
      </svg>
    </div>
  );
}
