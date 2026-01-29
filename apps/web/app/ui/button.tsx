import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}

export default function Button({ children, isLoading, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all uppercase
        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98]'} 
        focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-500 
        ${className}`}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
}