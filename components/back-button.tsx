"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  label: string;
};
export const BackButton = ({ label, className }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={cn(
        "flex text-lg font-medium items-center gap-x-1 px-3 py-2 rounded-md hover:opacity-80 transition active:scale-95 bg-stone-800 text-white w-max",
        className
      )}
    >
      <ChevronLeft />
      {label}
    </button>
  );
};
