import { FC, createContext, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import AuthRoot from './pages/auth';
import Layout from './components/layout';
import Shop from './pages/shop';
import { AdminRoute, AuthRoute } from './utils/private-routes';
import ShoppingCart from './pages/shopping-cart';
import Admin from './pages/admin';
import AuthRoutesRoot from './pages/auth-routes';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App: FC = (): JSX.Element => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route element={<AuthRoute />}>
                {/* <Route path='history' element={<History />} /> */}
                {/* <Route path='coupons' element={<Coupons />} /> */}
                <Route path='history' element={<AuthRoutesRoot />} />
                <Route path='coupons' element={<AuthRoutesRoot />} />
              </Route>
              <Route element={<AdminRoute />}>
                <Route path='admin' element={<Admin />} />
              </Route>
              <Route path='shop' element={<Shop />} />
              <Route path='shopping_cart' element={<ShoppingCart />} />
              <Route path='*' element={<Shop />} />
            </Route>

            {/* {pages.map((page) => (
                <Route key={uuid()} path={page.path} element={page.element} />
              ))}
            </Route>*/}
            {/* <Route path='login' element={<AuthRoot />} />
            <Route path='register' element={<AuthRoot />} /> */}
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
