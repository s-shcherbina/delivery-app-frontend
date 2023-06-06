import { useEffect, useContext, FC, useState } from 'react';
import {
  AppBar,
  Button,
  Divider,
  Stack,
  IconButton,
  useTheme,
  Typography,
} from '@mui/material';
import {
  Brightness7,
  Brightness4,
  Menu,
  AdminPanelSettingsSharp,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { ColorModeContext } from '../App';
import { AlignCenter, Between, Flex } from '.';
import { pages } from '../common/moks';
import DrawerMenu from './drawer-menu';
import LoginButton from './login-button';
import { useAdmin } from '../utils/hooks';

const NavBar: FC = (): JSX.Element => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const admin = useAdmin();

  const menuToggle = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    navigate(pathname);
  }, [pathname, navigate]);

  return (
    <>
      <AppBar
        color='default'
        position='static'
        sx={{
          px: { xs: 0.5, md: 2 },
          py: 0.5,
        }}
      >
        <Between>
          <IconButton
            color='primary'
            sx={{ display: { sm: 'none' } }}
            onClick={menuToggle}
          >
            <Menu />
          </IconButton>
          <AlignCenter sx={{ overflow: 'hidden', display: { sm: 'none' } }}>
            <Typography variant='button' color='primary' noWrap>
              {pathname.slice(1).replace('_', ' ')}
            </Typography>
          </AlignCenter>
          <Stack
            direction='row'
            spacing={{ sm: 0.5, md: 2 }}
            divider={<Divider orientation='vertical' flexItem />}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {pages.map((item) => (
              <Button
                key={item.page}
                startIcon={item.icon}
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  textDecoration: pathname === item.path ? 'underline' : 'none',
                  textTransform: 'none',
                  borderRadius: 2,
                  p: 1.3,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: pathname === item.path ? 'bolder' : '',
                    '&:hover': {
                      fontWeight: 'bolder',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.page}
                </Typography>
              </Button>
            ))}
          </Stack>
          <Flex>
            {admin && (
              <>
                <IconButton color='primary' onClick={() => navigate('/admin')}>
                  <AdminPanelSettingsSharp />
                </IconButton>
                <Divider orientation='vertical' flexItem sx={{ mx: 0.5 }} />
              </>
            )}
            <IconButton color='primary' onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
            <Divider orientation='vertical' flexItem sx={{ mx: 0.5 }} />
            <LoginButton />
          </Flex>
        </Between>
      </AppBar>
      <DrawerMenu
        menuOpen={menuOpen}
        menuToggle={menuToggle}
        navigate={navigate}
      />
    </>
  );
};
export default NavBar;
