/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e0d8ce",
          "300": "#e0d8cd",
          "400": "rgba(217, 217, 217, 0.03)",
          "500": "#d8dadc",
        },
        darkslategray: {
          "100": "#3e4958",
          "200": "#285a43",
          "300": "#145940",
          "400": "#29362f",
          "500": "rgba(41, 54, 47, 0.2)",
          "600": "rgba(41, 54, 47, 0.5)",
          "700": "rgba(41, 54, 47, 0.1)",
        },
        gray1: {
          "100": "rgba(255, 255, 255, 0.8)",
          "200": "rgba(18, 18, 18, 0.8)",
          "300": "rgba(35, 41, 41, 0.5)",
          "400": "rgba(255, 255, 255, 0.2)",
        },
        darkseagreen: "#9ad2ae",
        teal: {
          "100": "#4f8069",
          "200": "#3b8066",
        },
        white: "#fff",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "rgba(247, 248, 250, 0.8)",
          "300": "#f0f0f0",
          "400": "rgba(248, 248, 248, 0.03)",
        },
        silver: {
          "100": "#c7bfb3",
          "200": "#bdbdbd",
          "300": "#b5bdc4",
        },
        lightgray: {
          "100": "#d3d3d3",
          "200": "#cacaca",
        },
        gold: "rgba(246, 192, 2, 0.26)",
        "chestnut-800": "#252525",
        "chestnut-600": "#7b785b",
        yellowgreen: "#8bc63e",
        "grey-grey-500": "#667085",
        "gray-300": "#d0d5dd",
        "grey-grey-800": "#383e49",
        "grey-grey-700": "#48505e",
        lightgoldenrodyellow: "#cfe1b9",
        "french-grey": "#d1d1d8",
        "cool-grey": "#a2a3b1",
        palegoldenrod: "#ebe1ac",
        "space-cadet": "#17183b",
        "imperial-red": "#e14b4b",
        "light-gray-11": "#000",
        "light-primary": "#1573fe",
        "light-gray-4": "#d9d9d9",
        "success-500": "#12b76a",
        dimgray: "#726c6c",
      },
      spacing: {},
      fontFamily: {
        "body-2-medium": "Inter",
        spectral: "Spectral",
        lato: "Lato",
        "body-medium": "Roboto",
        raleway: "Raleway",
        "open-sans": "'Open Sans'",
        "text-sm": "Jost",
        poppins: "Poppins",
        orienta: "Orienta",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "31xl": "50px",
        xl: "20px",
        "61xl": "80px",
        mini: "15px",
        sm: "14px",
        mid: "17px",
      },
    },
    fontSize: {
      "3xs": "10px",
      sm: "14px",
      "mini-1": "14.1px",
      "9xl": "28px",
      "3xl": "22px",
      base: "16px",
      xl: "20px",
      "17xl": "36px",
      "10xl": "29px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xs: "12px",
      "2xs": "11px",
      mini: "15px",
      lg: "18px",
      "4xs": "9px",
      "19xl": "38px",
      "21xl": "40px",
      "5xl": "24px",
      smi: "13px",
      "61xl": "80px",
      "11xl": "30px",
      "77xl": "96px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
