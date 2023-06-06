import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './nav-bar';

const Layout: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  // || pathname === '/login' || pathname === '/register' ? (

  return pathname === '/admin' ? (
    <Outlet />
  ) : (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
