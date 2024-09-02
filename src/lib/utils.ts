import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const emojis = [
  "🎉",
  "🥳",
  "🎊",
  "🎁",
  "🍻",
  "🤜",
  "🤛",
  "😎",
  "🤗",
  "💪",
  "🎀",
  "📣",
  "🌈",
  "💐",
  "🎮",
  "🕹️",
  "👾",
];

export const randomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};
