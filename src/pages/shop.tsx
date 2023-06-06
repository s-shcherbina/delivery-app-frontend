import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { FC, useState } from 'react';
import { goods, shops } from '../common/moks';
import uuid from 'react-uuid';

const Shop: FC = (): JSX.Element => {
  const theme = useTheme();
  const [shop, setShop] = useState('');
  const [disabled, setDisabled] = useState(false);
  return (
    <Grid
      container
      columnSpacing={{ sm: 2, md: 3 }}
      rowSpacing={{ xs: 1 }}
      sx={{ display: 'flex', justifyContent: 'center', p: { xs: 1, md: 2 } }}
    >
      <Grid item xs={12} sm={5} md={4} lg={3}>
        <Stack
          alignItems='center'
          sx={{
            border: `1px solid ${theme.palette.action.disabled}`,
            borderRadius: 2,
            height: { sm: '90vh' },
          }}
        >
          {!disabled && (
            <Typography variant='h6' sx={{ mt: 2 }}>
              Shops:
            </Typography>
          )}
          {disabled && (
            <Button
              size='large'
              variant='outlined'
              sx={{ textTransform: 'none', borderRadius: 2, mt: 2 }}
              onClick={() => setDisabled(false)}
            >
              <Typography variant='h5'>Change Shop</Typography>
            </Button>
          )}
          <Stack sx={{ overflowY: 'auto', mb: 2 }}>
            {shops.map((item) => (
              <Button
                variant='outlined'
                size='large'
                disabled={shop === item ? false : disabled}
                color='inherit'
                key={uuid()}
                onClick={() => {
                  setShop(item);
                  setDisabled(true);
                }}
                sx={{
                  borderRadius: 2,
                  background:
                    shop === item ? theme.palette.action.selected : '',
                  mt: { xs: 1, md: 2 },
                  px: 4,
                  py: 2,
                  textTransform: 'none',
                  '&:hover': { background: theme.palette.action.selected },
                }}
              >
                <Typography variant='h6'>{item}</Typography>
              </Button>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={9}>
        <Box
          sx={{
            border: `1px solid ${theme.palette.action.disabled}`,
            borderRadius: 2,
            height: { xs: '100%', sm: '90vh' },
            overflow: 'auto',
            p: 1,
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 1, md: 2 }}
            columnSpacing={{ sm: 1, md: 2 }}
          >
            {goods.map((item) => (
              <Grid key={item.id} item xs={12} md={6} lg={4}>
                <Card
                  sx={{
                    border: `1px solid ${theme.palette.action.disabled}`,
                    borderRadius: 2,
                    p: 1,
                  }}
                >
                  <CardMedia
                    image={item.poster}
                    sx={{ height: 200, borderRadius: 1.5 }}
                  />
                  <CardContent>
                    <Typography variant='h6'>{item.label}</Typography>
                    <Typography variant='body1'>
                      Price: {item.price} $
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size='large'
                      variant='contained'
                      color='inherit'
                      sx={{
                        ml: 'auto',
                        textTransform: 'none',
                        borderRadius: 2,
                        fontWeight: 500,
                        px: 5,
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Shop;
