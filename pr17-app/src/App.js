import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/routes';
import theme from './assets/theme/theme.js';

function App() {
  return (
    <Router basename='/pr17-app'>
    <div color='primary.dark'>DEBUG:APP.JS</div>
    </Router>
  );
}

export default App;

/*
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename='/pr17-app'>
        <RoutesConfig />
      </Router>
    </ThemeProvider>
*/