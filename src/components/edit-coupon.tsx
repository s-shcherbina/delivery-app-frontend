import { FC, useState } from 'react';
import {
  Autocomplete,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Delete, PhotoCamera, Storefront } from '@mui/icons-material';
import Edit from '../components/edit';
import DeleteButton from '../components/delete-button';
import { top100Films } from '../common/moks';
import UploadImage from './upload-image';

const EditCoupon: FC = (): JSX.Element => {
  const theme = useTheme();
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [photo, setPhoto] = useState(false);

  return (
    <Stack
      spacing={1}
      sx={{
        border: `1px solid ${theme.palette.action.disabled}`,
        borderRadius: 2,
        m: 1,
        p: 1,
      }}
    >
      <Stack
        spacing={0.5}
        sx={{
          border: `1px solid ${theme.palette.action.disabled}`,
          borderRadius: 2,
          p: 1,
        }}
      >
        <Typography
          variant='h6'
          color='primary'
          sx={{ alignSelf: 'center', textDecoration: 'underline' }}
        >
          Select coupon:
        </Typography>
        <Autocomplete
          options={top100Films}
          // sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label='Coupon' />}
        />
      </Stack>

      <Button
        variant='outlined'
        endIcon={<Storefront />}
        onClick={() => setAdd(true)}
      >
        Add a new coupon
      </Button>
      <Divider />
      {/* {add && <Edit color='primary' onHide={() => setAdd(false)} />} */}
      <Button
        // disabled={store.selectedShop ? false : true}
        variant='outlined'
        endIcon={<Storefront />}
        color='warning'
        onClick={() => setEdit(true)}
      >
        Edit
      </Button>
      <Divider />
      {/* {edit && <Edit color='warning' onHide={() => setEdit(false)} />} */}
      <Button
        // disabled={store.selectedGood ? false : true}
        variant='outlined'
        endIcon={<PhotoCamera />}
        onClick={() => setPhoto(true)}
      >
        Coupon photo
      </Button>
      {photo && <UploadImage onHide={() => setPhoto(false)} />}
      <Button
        // disabled={store.selectedShop ? false : true}
        variant='outlined'
        endIcon={<Delete />}
        color='error'
        onClick={() => setRemove(true)}
      >
        Delete
      </Button>
      {remove && <DeleteButton onHide={() => setRemove(false)} />}
    </Stack>
  );
};

export default EditCoupon;
