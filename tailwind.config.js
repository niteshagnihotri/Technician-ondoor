module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      fontFamily:{
        QuickSand:["Quicksand", "sans-serif"],
        SourceSans:["Source Sans Pro", "sans-serif"],
        Mont:["'Montserrat', 'sans-serif'"],
        Raleway:["'Raleway', 'sans-serif'"],
        Roboto:["'Roboto', 'sans-serif'"],
        OpenSans:["'Open Sans', 'sans-serif'"],
        Karla:["'Karla', 'sans-serif'"]
      },
      backgroundImage: {
        'green_gradient':'linear-gradient(to right, #10647c, #056c81, #007485, #007b88, #00838a, #00898b, #00908a, #009689, #009d84, #00a37b, #00a970, #16ae61)',
        'button_gradient':'linear-gradient(to right top, #10647c, #056c81, #007485, #007b88, #00838a, #00898b, #00908a, #009689, #009d84, #00a37b, #00a970, #16ae61)',
        'img_url':'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      },
      transitionProperty:{
        'left':'left',
        'right':'right',
        'down':'down',
        'up':'up'
      },
    },
  },
}