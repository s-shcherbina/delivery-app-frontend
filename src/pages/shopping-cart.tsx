import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { Center } from '../components';
import { useAppDispatch } from '../utils/hooks';
import GoodsData from '../components/product-data';
import CustomerData from '../components/customer-data';

const ShoppingCart: FC = (): JSX.Element => {
  const theme = useTheme();
  // const dispatch = useAppDispatch();

  return (
    // <form>
    <Box
      sx={{
        m: 1.5,
        border: `1px solid ${theme.palette.action.disabled}`,
        borderRadius: 2,
      }}
    >
      <Grid
        container
        columnSpacing={{ sm: 2, md: 3 }}
        rowSpacing={1}
        sx={{
          p: { xs: 1, md: 2 },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Stack
            alignItems='center'
            sx={{
              border: `1px solid ${theme.palette.action.disabled}`,
              borderRadius: 2,
              height: { sm: '85vh' },
              py: 1,
            }}
          >
            <Card
              sx={{
                height: { xs: 200, sm: '50%' },
                border: `1px solid ${theme.palette.action.disabled}`,
                borderRadius: 2,
                width: '95%',
                my: 1,
              }}
            >
              <Center>
                <h1>MAP</h1>
              </Center>
            </Card>
            <CustomerData />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <GoodsData />
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              justifyContent: { xs: '', md: 'space-between' },
              mt: 2,
            }}
          >
            <TextField
              label='coupon code'
              size='small'
              margin='normal'
              sx={{ width: { xs: '100%', md: '40%' } }}
            />
            <TextField
              label='captcha'
              margin='normal'
              size='small'
              sx={{ width: { xs: '100%', md: '40%' } }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              justifyContent: { xs: '', md: 'space-between' },
              mt: 2,
            }}
          >
            <Typography
              variant='h5'
              sx={{ ml: '2%', mt: 1 }}
            >{`Total price: ${'999'} $`}</Typography>
            <Button
              type='submit'
              variant='contained'
              color='inherit'
              sx={{
                width: { xs: '100%', md: '40%' },
                borderRadius: 2,
                textTransform: 'none',
                my: { xs: 3, md: 1 },
              }}
            >
              <Typography variant='h6'>Submit</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // </form>
  );
};
export default ShoppingCart;
