import { FC, useState } from 'react';
import {
  Button,
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  useTheme,
} from '@mui/material';
import { goods } from '../../common/moks';

import uuid from 'react-uuid';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Coupons: FC = (): JSX.Element => {
  const theme = useTheme();
  const [gogoods, setGogoods] = useState(
    goods.map((item) => {
      return { ...item, code: uuid(), value: 'Copy' };
    })
  );

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.action.disabled}`,
        borderRadius: 2,
        height: { sm: '64vh' },
        width: '96%',
        overflow: 'auto',
        p: 1,
        m: 1.5,
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ sm: 1, md: 2 }}>
        {gogoods.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} xl={3}>
            <Card
              sx={{
                border: `1px solid ${theme.palette.action.disabled}`,
                borderRadius: 2,
                p: 1,
              }}
            >
              <CardMedia
                image={item.poster}
                sx={{ height: 180, borderRadius: 1.5 }}
              />
              <CardContent>
                <Typography variant='h6'>Coupone {item.label}</Typography>
                <Typography variant='body1'>{item.code}</Typography>
              </CardContent>
              <CardActions>
                <CopyToClipboard text={item.code}>
                  <Button
                    color='inherit'
                    variant='contained'
                    sx={{
                      textTransform: 'none',
                      ml: 'auto',
                      borderRadius: 2,
                      px: 5,
                    }}
                    onClick={() =>
                      setGogoods(
                        gogoods.map((elem) =>
                          elem.id === item.id
                            ? { ...elem, value: 'Copied' }
                            : elem
                        )
                      )
                    }
                    onMouseOut={() =>
                      setGogoods(
                        gogoods.map((elem) =>
                          elem.id === item.id
                            ? { ...elem, value: 'Copy' }
                            : elem
                        )
                      )
                    }
                  >
                    <Typography variant='h6'>{item.value}</Typography>
                  </Button>
                </CopyToClipboard>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Coupons;
