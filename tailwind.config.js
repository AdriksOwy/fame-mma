module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl-bottom": "0 10px 20px black",
        "3xl-top": "0 -10px 20px black",
        "4xl-bottom": "0 15px 40px black",
        "4xl-top": "0 -15px 40px black",
        "center-box": "0 0 5px white",
        "button": "0 0 15px red",
      },
      borderWidth: {
        "16": "16px",
      },
      keyframes: {
        fadeLogo: {
          "0%, 50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeLogo: "4s ease-out 0s 1 fadeLogo",
        slideTop: "2s ease-out 0s 1 slideTop",
        slideBottom: "1s ease-out 0s 1 slideBottom"
      },
    },
  },
  plugins: [],
};
