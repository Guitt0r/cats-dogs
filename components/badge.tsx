import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Badge = ({ children, className }: Props) => {
  return (
    <span
      className={cn(
        "bg-slate-500 text-slate-100 px-3 py-1 rounded-2xl shadow-md",
        className
      )}
    >
      {children}
    </span>
  );
};
