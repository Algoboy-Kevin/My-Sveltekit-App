module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
        {
            cyberpunk: {
                ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
                "nautral-content": "#FFFFFF",
                "base-100": "#FFFFFF",
                "base-200": "#F9FAFB",
                "base-300": "#D1D5DB"  
            },    
        },
    ]
  },
};
