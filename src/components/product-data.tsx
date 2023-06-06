import {
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { goods } from '../common/moks';

const ProductData: FC = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        border: `1px solid ${theme.palette.action.disabled}`,
        borderRadius: 2,
        height: { sm: '54vh', md: '64vh' },
        overflowY: 'auto',
        alignItems: 'center',
        py: 1,
      }}
    >
      {goods.map((item) => (
        <Grid
          container
          key={item.id}
          sx={{
            border: `1px solid ${theme.palette.action.disabled}`,
            borderRadius: 2,
            width: '95%',
            height: '100%',
            m: 1,
          }}
        >
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <CardMedia
              image={item.poster}
              sx={{ height: 235, borderRadius: 2 }}
            />
          </Grid>
          <Grid item sm={12} md={6} sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant='h5'>{item.label}</Typography>
              <Typography variant='h6'>Price: {item.price} $</Typography>
            </CardContent>
            <CardActions>
              <TextField
                size='small'
                label='number'
                type='number'
                sx={{ width: 130 }}
              />
            </CardActions>
          </Grid>
        </Grid>
      ))}
      ;
    </Stack>
  );
};

export default ProductData;
