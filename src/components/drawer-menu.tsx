import {
  Box,
  ClickAwayListener,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FC } from 'react';
import uuid from 'react-uuid';
import { pages } from '../common/moks';
import { IDrawerMenu } from '../common/types';

const DrawerMenu: FC<IDrawerMenu> = ({
  menuOpen,
  menuToggle,
  navigate,
}): JSX.Element => {
  const drawerMenu = (
    <ClickAwayListener onClickAway={menuToggle}>
      <List>
        {pages.map((item) => (
          <ListItem key={uuid()} divider>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                menuToggle();
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.page} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
    </ClickAwayListener>
  );
  return (
    <Box component='nav'>
      <Drawer
        variant='temporary'
        open={menuOpen}
        onClose={menuToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: '90%',
          },
        }}
      >
        {drawerMenu}
      </Drawer>
    </Box>
  );
};

export default DrawerMenu;
