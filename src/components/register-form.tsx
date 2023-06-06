import { Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { IPropsRegisterForm } from '../common/types';

const RegisterForm: FC<IPropsRegisterForm> = ({
  name,
  address,
  // email,
  // phone,
  setName,
  setAddress,
  // setEmail,
  // setPhone,
}): JSX.Element => {
  return (
    <Stack>
      {/* <TextField
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
      /> */}
      <TextField
        label='Name'
        margin='dense'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label='Address'
        margin='dense'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Stack>
  );
};

export default RegisterForm;
