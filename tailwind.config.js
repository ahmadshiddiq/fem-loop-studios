module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        87: "87%",
        512: "32rem",
        448: "28rem",
      },
      backgroundImage: (theme) => ({
        // Others
        "header-sm": "url('./images/mobile/image-hero.jpg')",
        "header-md": "url('./images/desktop/image-hero.jpg')",
        // Mobile size
        "product-mobile-1": "url('./images/mobile/image-deep-earth.jpg')",
        "product-mobile-2": "url('./images/mobile/image-night-arcade.jpg')",
        "product-mobile-3": "url('./images/mobile/image-soccer-team.jpg')",
        "product-mobile-4": "url('./images/mobile/image-grid.jpg')",
        "product-mobile-5": "url('./images/mobile/image-from-above.jpg')",
        "product-mobile-6": "url('./images/mobile/image-pocket-borealis.jpg')",
        "product-mobile-7": "url('./images/mobile/image-curiosity.jpg')",
        "product-mobile-8": "url('./images/mobile/image-fisheye.jpg')",
        // Desktop size
        "product-desktop-1": "url('./images/desktop/image-deep-earth.jpg')",
        "product-desktop-2": "url('./images/desktop/image-night-arcade.jpg')",
        "product-desktop-3": "url('./images/desktop/image-soccer-team.jpg')",
        "product-desktop-4": "url('./images/desktop/image-grid.jpg')",
        "product-desktop-5": "url('./images/desktop/image-from-above.jpg')",
        "product-desktop-6":
          "url('./images/desktop/image-pocket-borealis.jpg')",
        "product-desktop-7": "url('./images/desktop/image-curiosity.jpg')",
        "product-desktop-8": "url('./images/desktop/image-fisheye.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
