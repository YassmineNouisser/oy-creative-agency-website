interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-oy-electric/10 text-oy-label border border-oy-electric/20 ${className}`}
    >
      {children}
    </span>
  );
}
