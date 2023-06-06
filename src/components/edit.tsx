import { Close, DataSaverOn } from '@mui/icons-material';
import {
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { IPropsEdit } from '../common/types';

const Edit: FC<IPropsEdit> = ({
  color,
  onHide,
  // name,
  setName,
  // address,
  setAddress,
}): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Stack
        spacing={1}
        sx={{
          border: `1px solid ${theme.palette.action.disabled}`,
          borderRadius: 1.5,
          p: 1,
        }}
      >
        <IconButton size='small' sx={{ alignSelf: 'end' }} onClick={onHide}>
          <Close fontSize='small' />
        </IconButton>
        <TextField
          label='Name'
          // value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <TextField
          label='Address'
          // value={address}
          onChange={(e) => setAddress(e.target.value)}
          // value={label}
          // onChange={changeLabel}
        /> */}
        <Button
          type='submit'
          variant='outlined'
          color={color}
          endIcon={<DataSaverOn />}
          // onClick={onHide}
          // onClick={changeItem}
        >
          Apply
        </Button>
      </Stack>
      <Divider />
    </>
  );
};

export default Edit;
