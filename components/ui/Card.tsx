import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Card({ children, className, gradient }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[14px] border p-6 transition-all duration-200",
        "bg-[#0F0A1C] border-white/[0.08]",
        gradient && "before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[2px] before:rounded-full before:bg-gradient-to-b before:from-[#7C3AED] before:via-[#E11D74] before:to-[#F97316]",
        gradient && "hover:before:opacity-100 hover:translate-y-[-2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
