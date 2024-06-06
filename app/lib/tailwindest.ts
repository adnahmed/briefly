import { createTools, Tailwindest } from "tailwindest";

export type TailwindCustom = Tailwindest<{
  screens: "tablet" | "mobile" | "desktop" | "screen";
  color:
    | "blue-dark"
    | "blue-dark-100"
    | "blue-dark-200"
    | "blue-dark-300"
    | "blue-dark-400"
    | "blue-dark-500"
    | "blue-dark-600"
    | "blue-dark-700"
    | "blue-dark-800"
    | "blue-dark-900"
    | "blue-dark-950"
    | "blue"
    | "gray"
    | "sky"
    | "orange"
    | "yellow"
    | "green-dark"
    | "green"
    | "pink"
    | "teal"
    | "red"
    | "purple"
    | "green-light";
}>;

export const tw = createTools<TailwindCustom>();
