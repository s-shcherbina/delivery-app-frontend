import { Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { IPropsLoginForm } from '../common/types';

const LoginForm: FC<IPropsLoginForm> = ({
  email,
  phone,
  setEmail,
  setPhone,
}): JSX.Element => {
  return (
    <Stack>
      <TextField
        label='E-mail'
        value={email}
        margin='dense'
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label='Phone'
        value={phone}
        margin='dense'
        onChange={(e) => setPhone(e.target.value)}
      />
    </Stack>
  );
};

export default LoginForm;
