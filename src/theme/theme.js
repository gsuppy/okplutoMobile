'user strict';

import {COLOR, ThemeProvider, Spacing} from 'react-native-material-ui';
// import Spacing from 'material-ui/styles/spacing';
// import zIndex from 'material-ui/styles/zIndex';

const uiTheme = {
  spacing: Spacing,
  fontFamily: 'Quattrocento, sans-serif',
  palette: {
    primary1Color: COLOR.teal900,
    primary2Color: COLOR.teal700,
    primary3Color: COLOR.teal50,
    accent1Color: COLOR.blueGrey600,
    accent2Color: COLOR.blueGrey400,
    accent3Color: COLOR.blueGrey100,
    textColor: COLOR.teal900,
    alternateTextColor: COLOR.white,
    canvasColor: COLOR.white,
    borderColor: COLOR.grey300,
    pickerHeaderColor: COLOR.teal900,
  }
};

export default uiTheme;