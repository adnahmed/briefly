import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/**
 * utility class presets
 */
function _presets() {
  const shapes = ["circle", "ellipse"];
  const pos = {
    c: "center",
    t: "top",
    b: "bottom",
    l: "left",
    r: "right",
    tl: "top left",
    tr: "top right",
    bl: "bottom left",
    br: "bottom right",
  };
  let result: Record<string, string> = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

const radialGradientPlugin = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        // map to bg-radient-[*]
        "bg-radient": (value) => ({
          "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme("radialGradients") },
    );
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  },
);

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: require("./tailwind.screens"),
      colors: {
        "blue-dark": {
          "100": "#E5E7E9",
          "200": "#CCD0D4",
          "300": "#B2B8BE",
          "400": "#99A1A9",
          "500": "#808993",
          "600": "#66727E",
          "700": "#4D5B69",
          "800": "#334353",
          "900": "#1A2C3E",
          "950": "#001428",
          DEFAULT: "#001428",
        },
        blue: {
          "100": "#E8F0FC",
          "200": "#D2E2F9",
          "300": "#BBD3F6",
          "400": "#A5C5F3",
          "500": "#8EB6F1",
          "600": "#78A8EE",
          "700": "#6299EB",
          "800": "#4B8BE8",
          "900": "#357DE5",
          "950": "#1E6EE2",
          DEFAULT: "#003BAF",
        },
        gray: {
          "50": "#FCFDFE",
          "100": "#F8FBFC",
          "200": "#F5F8FB",
          "300": "#F5F5F5",
          "400": "#F1F6FA",
          "500": "#EEF4F9",
          "600": "#EBF2F7",
          "700": "#E7F0F6",
          "800": "#E4EDF5",
          "900": "#E0EBF3",
          "950": "#DDE9F2",
          DEFAULT: "#BABABA",
        },
        sky: {
          "100": "#F5FAFF",
          "200": "#EBF5FF",
          "300": "#E0F0FF",
          "400": "#D6EBFF",
          "500": "#CCE5FF",
          "600": "#C2E0FF",
          "700": "#B8DBFF",
          "800": "#ADD6FF",
          "900": "#A3D1FF",
          "950": "#99CCFF",
          DEFAULT: "#99CCFF",
        },
        orange: {
          "100": "#FFF3EB",
          "200": "#FFE7D6",
          "300": "#FFDAC2",
          "400": "#FFCEAD",
          "500": "#FFC299",
          "600": "#FFB685",
          "700": "#FF9D5C",
          "800": "#FF9D5C",
          "900": "#FF9147",
          "950": "#FF8533",
          DEFAULT: "#FF8533",
        },
        yellow: {
          "100": "#FCFFF3",
          "200": "#FAFFE7",
          "300": "#F7FFDA",
          "400": "#F5FFCE",
          "500": "#F2FFC2",
          "600": "#EFFFB6",
          "700": "#EDFFAA",
          "800": "#EAFF9D",
          "900": "#E8FF91",
          "950": "#E5FF85",
          DEFAULT: "#E5FF85",
        },
        "green-dark": {
          "100": "#E5E8E5",
          "200": "#CCD1CC",
          "300": "#B2BAB2",
          "400": "#99A399",
          "500": "#808C80",
          "600": "#667566",
          "700": "#4D5E4D",
          "800": "#334733",
          "900": "#1A301A",
          "950": "#001A00",
          DEFAULT: "#001A00",
        },
        green: {
          "100": "#F1F4E5",
          "200": "#E2E8CC",
          "300": "#D4DDB2",
          "400": "#C5D199",
          "500": "#B7C680",
          "600": "#A9BB66",
          "700": "#9AAF4D",
          "800": "#8CA433",
          "900": "#7D991A",
          "950": "#6F8D00",
          DEFAULT: "#6F8D00",
        },
        pink: {
          "100": "#FFF5FD",
          "200": "#FFEAFC",
          "300": "#FFE0FB",
          "400": "#FFD5F9",
          "500": "#FFCBF7",
          "600": "#FFC1F6",
          "700": "#FFB6F5",
          "800": "#FFACF3",
          "900": "#FFA1F1",
          "950": "#FF97F0",
          DEFAULT: "#FF97F0",
        },
        teal: {
          "100": "#E5F9F7",
          "200": "#CCF4EF",
          "300": "#B2EFE7",
          "400": "#99E9DF",
          "500": "#80E3D7",
          "600": "#66DECF",
          "700": "#4DD9C7",
          "800": "#33D3BF",
          "900": "#1ACDB7",
          "950": "#00C8AF",
          DEFAULT: "#00C8AF",
        },
        red: {
          "100": "#FDF0F0",
          "200": "#FBE0E0",
          "300": "#FAD1D1",
          "400": "#F8C2C2",
          "500": "#F6B2B2",
          "600": "#F4A3A3",
          "700": "#F29494",
          "800": "#F18585",
          "900": "#EF7575",
          "950": "#E54937",
          DEFAULT: "#E54937",
        },
        purple: {
          "100": "#F7F0FE",
          "200": "#EFE2FC",
          "300": "#E7D3FB",
          "400": "#DFC5FA",
          "500": "#D7B6F9",
          "600": "#CEA7F7",
          "700": "#C699F6",
          "800": "#BE8AF5",
          "900": "#B67CF3",
          "950": "#AE6DF2",
          DEFAULT: "#AE6DF2",
        },
        "green-light": {
          "100": "#F8FDF8",
          "200": "#F1FCF0",
          "300": "#EBFAE9",
          "400": "#E4F9E2",
          "500": "#DDF7DB",
          "600": "#D6F5D3",
          "700": "#CFF4CC",
          "800": "#C9F2C5",
          "900": "#C2F1BD",
          "950": "#BBEFB6",
          DEFAULT: "#BBEFB6",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-host-grotesk)", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        "spin-slow": "spin 3.2s linear infinite",
      },
    },
  },
  plugins: [radialGradientPlugin],
};
export default config;
