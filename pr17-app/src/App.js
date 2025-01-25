import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/routes';
import theme from './assets/theme/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ color: "#0f0f0f" }}>DEBUG: APP.JS</div>
      <Router basename="/pr17-app">
        <RoutesConfig />
      </Router>
    </ThemeProvider>
  );
}

export default App;
