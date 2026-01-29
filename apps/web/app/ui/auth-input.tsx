interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  rightElement?: React.ReactNode;
}

export default function AuthInput({ label, id, error, rightElement, ...props }: AuthInputProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-sm font-bold text-gray-900 uppercase tracking-wide">
          {label}
        </label>
        {rightElement}
      </div>
      <div className="mt-2 relative">
        <input
          id={id}
          {...props}
          className={`block w-full rounded-md border-0 py-3 px-4 shadow-sm ring-1 ring-inset outline-none transition-all sm:text-sm
            ${error 
              ? 'ring-red-500 focus:ring-2 focus:ring-red-500 text-red-900' 
              : 'ring-gray-300 focus:ring-2 focus:ring-orange-500 text-gray-900'
            } placeholder:text-gray-400`}
        />
      </div>
      <div className="min-h-5 mt-1"> 
        {error && (
          <p className="text-xs font-bold text-red-600 tracking-tighter animate-in fade-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}