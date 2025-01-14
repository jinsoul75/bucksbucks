export default function Button({
  children,
  ...props
}: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="bg-secondary text-primary" {...props}>
      {children}
    </button>
  );
}
