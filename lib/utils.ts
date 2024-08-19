import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Upload image directly from cdn, making it loads faster
export const imageLoader = ({ src, width }: { src: string; width: number }) => {
  return `${src}?w=${width}&q=75`;
};