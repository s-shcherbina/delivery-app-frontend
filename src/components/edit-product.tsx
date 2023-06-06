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
import { Delete, Fastfood, PhotoCamera } from '@mui/icons-material';
import Edit from './edit';
import DeleteButton from './delete-button';
import { top100Films } from '../common/moks';
import UploadImage from './upload-image';

const EditProduct: FC = (): JSX.Element => {
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
        spacing={1}
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
          Select product:
        </Typography>
        <Autocomplete
          options={top100Films}
          // sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label='Good' />}
        />
      </Stack>
      <Button
        // disabled={store.selectedShop ? false : true}
        variant='outlined'
        endIcon={<Fastfood />}
        onClick={() => setAdd(true)}
      >
        Add a new product
      </Button>
      <Divider />
      {/* {add && <Edit color='primary' onHide={() => setAdd(false)} />} */}
      <Button
        // disabled={store.selectedGood ? false : true}
        variant='outlined'
        endIcon={<Fastfood />}
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
        Product photo
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

export default EditProduct;
