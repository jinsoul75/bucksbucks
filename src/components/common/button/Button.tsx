export default function Button({
  children,
  className,
  onClick,
  disabled,
  ...props
}: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`p-2 rounded-lg transition-colors duration-200 ${
        disabled
          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
          : 'bg-yellow-dark text-yellow-light hover:bg-yellow-hover'
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
