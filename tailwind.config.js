// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust this path based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          olive: '#ABEF5F', // Replace with your desired color
          customColor2: '#abcdef',
          
        },
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          mytheme: { // You can name your theme anything you like
            primary: "#123456", // Use the custom color here
            secondary: "#abcdef",
            accent: "#f1c40f", // Example color
            neutral: "#2c3e50", // Example color
            "base-100": "#ffffff", // Example color
            info: "#1d4ed8", // Example color
            success: "#16a34a", // Example color
            warning: "#f59e0b", // Example color
            error: "#dc2626", // Example color
          },
        },
      ],
    },
  };
  