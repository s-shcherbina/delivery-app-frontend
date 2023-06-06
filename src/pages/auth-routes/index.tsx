import { Button, Stack, Typography, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Center } from '../../components';
import LoginForm from '../../components/login-form';
import History from './history';
import Coupons from './coupons';
import { useAppDispatch, useAppSelector, useAuth } from '../../utils/hooks';
import { instance } from '../../utils/axios';
import { login } from '../../store/slices/auth';

const AuthRoutesRoot: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const theme = useTheme();
  const [phone, setPhone] = useState(
    useAppSelector((state) => state.auth.user?.userData?.phone) || ''
  );
  const [email, setEmail] = useState(
    useAppSelector((state) => state.auth.user?.userData?.email) || ''
  );
  const auth = useAuth();

  const handleSubmitLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loginData = { email, phone };
    try {
      const user = await instance.post('auth/login', loginData);
      console.log(user.data);
      dispatch(login(user.data));
      localStorage.setItem('token', user.data.token);
    } catch (e: any) {
      console.error(e.response?.data.message);
    }
  };

  // const email = useAppSelector((state) => state.auth.user.userData.email);
  // console.log(email);

  return (
    <form onSubmit={handleSubmitLogin}>
      <Stack
        alignItems='center'
        sx={{
          border: `1px solid ${theme.palette.action.disabled}`,
          borderRadius: 2,
          width: '98%',
          height: { sm: '90vh' },
          py: 1.5,
          m: 'auto',
          mt: 1.5,
        }}
      >
        <Center
          sx={{
            width: '96%',
            height: '25vh',
            borderRadius: 2,
            border: `1px solid ${theme.palette.action.disabled}`,
          }}
        >
          <Stack
            sx={{
              minWidth: { xs: '95%', sm: '80%', md: '50%', lg: '40%' },
            }}
          >
            <LoginForm
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
            />
            <Button
              type='submit'
              color='inherit'
              variant='contained'
              sx={{ textTransform: 'none', alignSelf: 'end', px: 8, my: 1 }}
            >
              Submit
            </Button>
          </Stack>
        </Center>
        {auth ? (
          pathname === '/history' ? (
            <History />
          ) : (
            <Coupons />
          )
        ) : (
          <Typography variant='h2' sx={{ m: 'auto' }}>
            Enter data to view
          </Typography>
          //   <Typography variant='h2' sx={{ m: 'auto' }}>
          //   You have no orders
          // You don't have coupons
          // </Typography>
        )}
        {/* {pathname === '/coupons' && auth && <CouponsComponent />} order history*/}
      </Stack>
    </form>
  );
};
export default AuthRoutesRoot;
