module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        87: "87%",
      },
      backgroundImage: (theme) => ({
        // Mobile size
        "product-sm-1": "url('./images/mobile/image-deep-earth.jpg')",
        "product-sm-2": "url('./images/mobile/image-night-arcade.jpg')",
        "product-sm-3": "url('./images/mobile/image-soccer-team.jpg')",
        "product-sm-4": "url('./images/mobile/image-grid.jpg')",
        "product-sm-5": "url('./images/mobile/image-from-above.jpg')",
        "product-sm-6": "url('./images/mobile/image-pocket-borealis.jpg')",
        "product-sm-7": "url('./images/mobile/image-curiosity.jpg')",
        "product-sm-8": "url('./images/mobile/image-fisheye.jpg')",
        // Desktop size
        "product-lg-1": "url('./images/desktop/image-deep-earth.jpg')",
        "product-lg-2": "url('./images/desktop/image-night-arcade.jpg')",
        "product-lg-3": "url('./images/desktop/image-soccer-team.jpg')",
        "product-lg-4": "url('./images/desktop/image-grid.jpg')",
        "product-lg-5": "url('./images/desktop/image-from-above.jpg')",
        "product-lg-6": "url('./images/desktop/image-pocket-borealis.jpg')",
        "product-lg-7": "url('./images/desktop/image-curiosity.jpg')",
        "product-lg-8": "url('./images/desktop/image-fisheye.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
