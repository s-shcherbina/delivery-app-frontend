import { FC } from 'react';
import { Stack, Button, IconButton } from '@mui/material';
import {
  AddAPhoto,
  Close,
  NoPhotography,
  PhotoCamera,
} from '@mui/icons-material';

const UploadImage: FC<{ onHide: () => void }> = ({ onHide }): JSX.Element => {
  return (
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
        // disabled={!disabled ? false : true}
        variant='outlined'
        endIcon={<PhotoCamera />}
        component='label'
      >
        {/* Upload {label} photo */}
        Upload photo
        <input
          hidden
          accept='image/*'
          // multiple
          type='file'
          // onChange={changeFile}
        />
      </Button>
      <Button
        // disabled={!disabled ? false : true}
        variant='contained'
        endIcon={<AddAPhoto />}
        onClick={onHide}
        // onClick={addImage}
      >
        Add
      </Button>
      <Button
        // disabled={disabled ? false : true}
        variant='contained'
        endIcon={<NoPhotography />}
        color='error'
        onClick={onHide}
        // onClick={deleteImage}
      >
        Delete
      </Button>
    </Stack>
  );
};

export default UploadImage;
