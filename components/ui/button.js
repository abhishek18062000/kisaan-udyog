export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  