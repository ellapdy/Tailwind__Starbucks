module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        starBanner: "url(../dist/img/xl-hero-desktop_2021.png)",
        bituinBanner: "url(../dist/img/hero-mobile_2021.webp)",
      },
      colors:{
        dark:"#2b2b2b",
        light: "#ffffff",
        berde: "#006241",
        lavender: "#d5d0ea",
        lberde: "#f2f0eb",
        slberde: "#f1f8fb",
        vlberde: "#d4e9e2",
        mberde: "#cee8c9",
        vberde: "#1e3932",
        lred: "#f5cac4",
        grey: "#dbe6f2",
        orange: "#e99264",
      }
    },
  },
  plugins: [],
}