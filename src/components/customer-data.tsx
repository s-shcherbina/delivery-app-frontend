import { FC, useState } from 'react';
import { useAppDispatch, useAuth } from '../utils/hooks';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import { Button, Card, Stack, Typography } from '@mui/material';
import { instance, instanceAuth } from '../utils/axios';
import { login } from '../store/slices/auth';
import uuid from 'react-uuid';

const CustomerData: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [switchForm, setSwitchForm] = useState(false);
  const [form, setForm] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const auth = useAuth();

  console.log(auth);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (localStorage.getItem('token')) console.log('token');

    if (!form) {
      const loginData = { email, phone };
      try {
        const user = await instance.post('auth/login', loginData);

        setName(user.data.userData.name);
        setAddress(user.data.userData.address);
        setDisabled(true);
        dispatch(login(user.data));

        console.log(user.data);

        localStorage.setItem('token', user.data.token);
      } catch (e: any) {
        console.error(e.response?.data.message);
      }
    }
    const registerData = { email, phone, name, address };

    console.log(localStorage.getItem('token'));

    if (form) {
      if (auth) {
        try {
          const user = await instanceAuth.patch('auth/user', registerData);
          localStorage.setItem('token', user.data.token);

          console.log(user.data);

          dispatch(login(user.data));
          setDisabled(true);
        } catch (e: any) {
          console.error(e.response.data.message);
        }
      } else {
        try {
          const newUser = await instance.post('auth/register', registerData);
          localStorage.setItem('token', newUser.data.token);

          console.log(newUser.data);

          dispatch(login(newUser.data));
          setDisabled(true);
        } catch (e: any) {
          console.error(e.response.data.message);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '95%' }}>
      {!disabled ? (
        <>
          <LoginForm
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
          {switchForm && (
            <RegisterForm
              name={name}
              setName={setName}
              address={address}
              setAddress={setAddress}
            />
          )}
        </>
      ) : (
        <Stack spacing={3} sx={{ my: 2 }}>
          {[email, phone, name, address].map((item) => (
            <Card key={uuid()}>
              <Typography variant='h6'>{item}</Typography>{' '}
            </Card>
          ))}
        </Stack>
      )}

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: switchForm ? 'space-between' : 'flex-end' }}
      >
        {switchForm && (
          <Button
            color='inherit'
            variant='contained'
            disabled={!disabled}
            sx={{
              textTransform: 'none',
              width: { xs: '100%', md: '40%' },
              my: 1,
            }}
            onClick={() => setDisabled(false)}
          >
            Change data
          </Button>
        )}
        <Button
          type='submit'
          color='inherit'
          variant='contained'
          disabled={disabled}
          sx={{
            textTransform: 'none',
            width: { xs: '100%', md: '40%' },
            my: 1,
            alignSelf: 'end',
          }}
          onClick={() => {
            !switchForm ? setSwitchForm(true) : setForm(true);
          }}
        >
          {switchForm ? 'Confirm' : 'Next'}
        </Button>
      </Stack>
    </form>
  );
};

export default CustomerData;
