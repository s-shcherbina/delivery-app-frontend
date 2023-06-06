import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { goods } from '../../common/moks';
import uuid from 'react-uuid';
let a = 999;

const History: FC = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Stack
      alignItems='center'
      sx={{
        border: `1px solid ${theme.palette.action.disabled}`,
        borderRadius: 2,
        height: { sm: '64vh' },
        width: '96%',
        mt: 2,
        overflowY: 'auto',
      }}
    >
      {goods.slice(0, 5).map((elem) => (
        <Grid
          container
          key={uuid()}
          sx={{
            border: `1px solid ${theme.palette.action.disabled}`,
            borderRadius: 2,
            m: 1,
            width: '98%',
          }}
        >
          {goods.slice(5, 7).map((item) => (
            <Grid item xs={12} sm={6} md={4} key={uuid()}>
              <Card
                sx={{
                  display: 'flex',
                  border: `1px solid ${theme.palette.action.disabled}`,
                  borderRadius: 2,
                  p: 1,
                  m: 1,
                }}
              >
                <CardMedia
                  image={item.poster}
                  sx={{ height: 152, borderRadius: 1.5, width: '55%' }}
                />
                <CardContent>
                  <Typography variant='h6'>{item.label}</Typography>
                  <Typography variant='body1'>Price: {item.price} $</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h4'>{`Total price: ${a}$`}</Typography>
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
};

export default History;
