import { FC } from 'react';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import EditShop from '../components/edit-shop';
import EditCoupon from '../components/edit-coupon';
import EditShopAddress from '../components/edit-shop-adress';
import EditProduct from '../components/edit-product';

const Admin: FC = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Stack sx={{ alignItems: 'center', p: 1 }}>
      <Typography variant='h3' color='primary' noWrap sx={{ my: 3 }}>
        Admin panel
      </Typography>
      <Grid
        container
        sx={{
          border: `1px solid ${theme.palette.action.disabled}`,
          borderRadius: 2,
          alignSelf: 'center',
        }}
      >
        <Grid item xs={12} sm={6} lg={3}>
          <EditShop />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <EditShopAddress />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <EditProduct />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <EditCoupon />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Admin;
