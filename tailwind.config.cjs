module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
        {
            cyberpunk: {
                ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
                "neutral": "#3D4451",
                "neutral-focus": "#303640",
                "neutral-content": "#FFFFFF",
                "base-100": "#FFFFFF",
                "base-200": "#F9FAFB",
                "base-300": "#D1D5DB",
                "base-content": "#1F2937",
            },    
        },
    ]
  },
};
