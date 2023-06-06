import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IPropsSubmitButton } from '../common/types';

const SubmitButton: FC<IPropsSubmitButton> = ({
  // mainButton,
  text,
  // secondaryButton,
  navigate,
}): JSX.Element => {
  return (
    <Stack alignItems={'center'}>
      <Button
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          width: { xs: '100%', sm: '60%' },
          mt: 2,
          mb: 2,
        }}
        type='submit'
        variant='contained'
      >
        <Typography variant='h6'>{text}</Typography>
      </Button>

      <Typography variant='body1'>
        {text === 'Sign Up' ? 'Have an account?' : `Don't have an account?`}
        <Button
          sx={{ textTransform: 'none', borderRadius: 1.5, mx: 1 }}
          onClick={() => navigate(text === 'Sign Up' ? '/login' : '/register')}
        >
          {text === 'Sign Up' ? 'Sign In' : 'Sign Up'}
        </Button>
      </Typography>
    </Stack>
  );
};

export default SubmitButton;
