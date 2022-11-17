import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/index.js';

import { Header } from './components/Header';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <div className="App">
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
