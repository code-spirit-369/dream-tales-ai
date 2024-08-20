import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatResponse(res: string) {
  const cleanRes = res.replace(/```json|```/g, "").trim();
  return cleanRes;
}
