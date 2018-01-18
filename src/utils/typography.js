import ReactDOM from 'react-dom/server';
import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";
fairyGateTheme.baseFontSize = '22px'
fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
  }
})
const typography = new Typography(fairyGateTheme);

export default typography;
