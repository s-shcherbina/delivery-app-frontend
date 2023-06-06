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
import { Delete, Storefront } from '@mui/icons-material';
import Edit from '../components/edit';
import DeleteButton from '../components/delete-button';
import { top100Films } from '../common/moks';
import { instance, instanceAuth } from '../utils/axios';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { addShop } from '../store/slices/shops';

const EditShop: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const shops = useAppSelector((state) => state.shops);
  console.log(shops.shopList);

  const handleSubmitShop = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (add) {
      const shopData = { name, address };
      try {
        await instanceAuth.post('shops', shopData);
        const shops = await instance.get('shops');
        console.log(shops.data);
        dispatch(addShop(shops.data));
        // setAdd(false);
      } catch (e: any) {
        console.error(e.response?.data.message);
      }
      setAdd(false);
    }
  };
  return (
    <form onSubmit={handleSubmitShop}>
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
            variant='h5'
            color={`${theme.palette.text.secondary}`}
            sx={{ alignSelf: 'center', mt: 1 }}
          >
            Shop name
          </Typography>
          <Divider />
          <Typography
            variant='h6'
            color='primary'
            sx={{ alignSelf: 'center', textDecoration: 'underline' }}
          >
            Select shop:
          </Typography>
          <Autocomplete
            options={shops.shopList.slice(0, -1).map((item) => item.name)}
            // options={top100Films}
            // sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label='Shop' />}
          />
        </Stack>

        <Button
          variant='outlined'
          endIcon={<Storefront />}
          onClick={() => setAdd(true)}
        >
          Add a new shop
        </Button>
        <Divider />
        {add && (
          <Edit
            color='primary'
            onHide={() => setAdd(false)}
            // name={name}
            setName={setName}
            // address={address}
            setAddress={setAddress}
          />
        )}
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
    </form>
  );
};

export default EditShop;
