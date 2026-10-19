import { monogram } from "@/lib/monogram";

// High-res favicon for Google results and browsers (favicon.ico stays as the fallback).
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return monogram(512);
}
