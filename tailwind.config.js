var black = '#000000'
var black100 = black
var white = '#ffffff'
var white0 = white
var yellow = '#f1c21b'
var yellow30 = yellow
var orange = '#ff832b'
var orange40 = orange
var red10 = '#fff1f1'
var red20 = '#ffd7d9'
var red30 = '#ffb3b8'
var red40 = '#ff8389'
var red50 = '#fa4d56'
var red60 = '#da1e28'
var red70 = '#a2191f'
var red80 = '#750e13'
var red90 = '#520408'
var red100 = '#2d0709'
var red = {
  10: red10,
  20: red20,
  30: red30,
  40: red40,
  50: red50,
  60: red60,
  70: red70,
  80: red80,
  90: red90,
  100: red100
}
var pink10 = '#fff0f7'
var pink20 = '#ffd6e8'
var pink30 = '#ffafd2'
var pink40 = '#ff7eb6'
var pink50 = '#ee5396'
var pink60 = '#d12771'
var pink70 = '#9f1853'
var pink80 = '#740937'
var pink90 = '#510224'
var pink100 = '#2a0a18'
var pink = {
  10: pink10,
  20: pink20,
  30: pink30,
  40: pink40,
  50: pink50,
  60: pink60,
  70: pink70,
  80: pink80,
  90: pink90,
  100: pink100
}
var purple10 = '#f6f2ff'
var purple20 = '#e8daff'
var purple30 = '#d4bbff'
var purple40 = '#be95ff'
var purple50 = '#a56eff'
var purple60 = '#8a3ffc'
var purple70 = '#6929c4'
var purple80 = '#491d8b'
var purple90 = '#31135e'
var purple100 = '#1c0f30'
var purple = {
  10: purple10,
  20: purple20,
  30: purple30,
  40: purple40,
  50: purple50,
  60: purple60,
  70: purple70,
  80: purple80,
  90: purple90,
  100: purple100
}
var blue10 = '#edf5ff'
var blue20 = '#d0e2ff'
var blue30 = '#a6c8ff'
var blue40 = '#78a9ff'
var blue50 = '#4589ff'
var blue60 = '#0f62fe'
var blue70 = '#0043ce'
var blue80 = '#002d9c'
var blue90 = '#001d6c'
var blue100 = '#001141'
var blue = {
  10: blue10,
  20: blue20,
  30: blue30,
  40: blue40,
  50: blue50,
  60: blue60,
  70: blue70,
  80: blue80,
  90: blue90,
  100: blue100
}
var cyan10 = '#e5f6ff'
var cyan20 = '#bae6ff'
var cyan30 = '#82cfff'
var cyan40 = '#33b1ff'
var cyan50 = '#1192e8'
var cyan60 = '#0072c3'
var cyan70 = '#00539a'
var cyan80 = '#003a6d'
var cyan90 = '#012749'
var cyan100 = '#061727'
var cyan = {
  10: cyan10,
  20: cyan20,
  30: cyan30,
  40: cyan40,
  50: cyan50,
  60: cyan60,
  70: cyan70,
  80: cyan80,
  90: cyan90,
  100: cyan100
}
var teal10 = '#d9fbfb'
var teal20 = '#9ef0f0'
var teal30 = '#3ddbd9'
var teal40 = '#08bdba'
var teal50 = '#009d9a'
var teal60 = '#007d79'
var teal70 = '#005d5d'
var teal80 = '#004144'
var teal90 = '#022b30'
var teal100 = '#081a1c'
var teal = {
  10: teal10,
  20: teal20,
  30: teal30,
  40: teal40,
  50: teal50,
  60: teal60,
  70: teal70,
  80: teal80,
  90: teal90,
  100: teal100
}
var green10 = '#defbe6'
var green20 = '#a7f0ba'
var green30 = '#6fdc8c'
var green40 = '#42be65'
var green50 = '#24a148'
var green60 = '#198038'
var green70 = '#0e6027'
var green80 = '#044317'
var green90 = '#022d0d'
var green100 = '#071908'
var green = {
  10: green10,
  20: green20,
  30: green30,
  40: green40,
  50: green50,
  60: green60,
  70: green70,
  80: green80,
  90: green90,
  100: green100
}
var gray10 = '#f4f4f4'
var gray20 = '#e0e0e0'
var gray30 = '#c6c6c6'
var gray40 = '#a8a8a8'
var gray50 = '#8d8d8d'
var gray60 = '#6f6f6f'
var gray70 = '#525252'
var gray80 = '#393939'
var gray90 = '#262626'
var gray100 = '#161616'
var gray = {
  10: gray10,
  20: gray20,
  30: gray30,
  40: gray40,
  50: gray50,
  60: gray60,
  70: gray70,
  80: gray80,
  90: gray90,
  100: gray100
}

module.exports = {
  purge: {
    enabled: process.env.REACT_APP_PRODUCTION,
    content: [
      'src/**/*.js',
      'public/**/*.html',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx'
    ]
  },
  theme: {
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '2/3': '66%',
      '3/4': '75%',
      full: '100%'
    },
    colors: {
      /* via IBM Carbon System */
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: gray,
      red: red,
      purple: purple,
      blue: blue,
      cyan: cyan,
      teal: teal,
      green: green,
      pink: pink,
      yellow: yellow,
      orange: orange
    },
    extend: {
      spacing: {
        '1.5': '0.375rem',
        '1px': '1px',
        '2px': '2px',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
      }
    }
  },
  variants: {},
  plugins: []
}
