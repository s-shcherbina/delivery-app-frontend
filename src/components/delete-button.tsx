import { Close, Delete } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';
import { FC } from 'react';

const DeleteButton: FC<{ onHide: () => void }> = ({ onHide }): JSX.Element => {
  return (
    <>
      <hr />
      <Stack
        spacing={1}
        sx={{
          border: '1px solid darkgray',
          borderRadius: 1.5,
          p: 1,
        }}
      >
        <IconButton size='small' sx={{ alignSelf: 'end' }} onClick={onHide}>
          <Close fontSize='small' />
        </IconButton>
        <Button
          variant='contained'
          endIcon={<Delete />}
          color='error'
          onClick={onHide}
          // onClick={removeItem}
        >
          Delete
          {/* Delete {value} */}
        </Button>
      </Stack>
    </>
  );
};

export default DeleteButton;
