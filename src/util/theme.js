//https://bareynol.github.io/mui-theme-creator/
//https://mui.com/styles/api/#themeprovider
const theme = (isDarkMode) => ({
    palette: {
        mode: isDarkMode ? "dark" : "light",
        primary: {
          main: '#1E1F20',

        },
        secondary: {
          main: '#131414',

        },
        text: {
          primary: '#FFFFFF',
          secondary: '#26CE8D',
          disabled: 'rgba(26,10,10,0.38)',
        },
        background: {
          default: '#131414',
          paper: '#D1D4C9',
        },
        divider: '#00ffd7',
      },
});
export default theme;