import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//...ckasses -> groups all classes, obects into an array

export function cn(...inputs: ClassValue[]) {
  //clsx accepts an array of classes and returns a string

  return twMerge(clsx(inputs));
}
