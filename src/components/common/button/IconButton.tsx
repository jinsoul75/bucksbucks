export default function IconButton({
  icon,
  ...props
}: { icon: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-yellow-dark text-yellow-light p-2 rounded-lg hover:bg-yellow-hover transition-colors duration-200"
      {...props}
    >
      {icon}
    </button>
  );
}
