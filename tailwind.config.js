/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
           animation: {
               cosmos: ""
           },
            scale:{
               '40':'0.4',
            }
        },
    },
    plugins: [],
}
