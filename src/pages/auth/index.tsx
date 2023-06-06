// import { FC, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '../../utils/hooks';
// import { instance } from '../../utils/axios';
// import { login } from '../../store/slices/auth';
// import { IconButton, Paper } from '@mui/material';
// import { Center } from '../../components';
// import { Close } from '@mui/icons-material';
// import Login from './login';
// import Register from './register';

// const AuthRoot: FC = (): JSX.Element => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     if (pathname === '/login') {
//       const loginData = { phone, email };
//       try {
//         const user = await instance.post('auth/login', loginData);
//         localStorage.setItem('token', user.data.userData.token);

//         console.log(user.data);

//         dispatch(login(user.data));
//         navigate('/shop');
//       } catch (e: any) {
//         console.error(e.response.data.message);
//       }
//     }
//     if (pathname === '/register') {
//       const registerData = { phone, email, name, address };
//       try {
//         const newUser = await instance.post('auth/register', registerData);

//         console.log(newUser.data);

//         dispatch(login(newUser.data));
//         navigate('/shop');
//       } catch (e: any) {
//         console.error(e.response.data.message);
//       }
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <Center
//         sx={{ height: { sm: '100vh' }, py: 2 }}
//         // background: `url(${burger}) center/cover`,
//       >
//         <Paper
//           elevation={6}
//           sx={{
//             width: { xs: 350, sm: 600 },
//             borderRadius: 2,
//             p: { xs: 1, sm: 3 },
//             boxShadow: '-3px -2px 20px 1px #202020',
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//         >
//           <IconButton
//             sx={{ display: 'flex', alignSelf: 'flex-end' }}
//             onClick={() => navigate('/shop')}
//           >
//             <Close />
//           </IconButton>
//           {pathname === '/login' ? (
//             <Login
//               setPhone={setPhone}
//               setEmail={setEmail}
//               navigate={navigate}
//             />
//           ) : pathname === '/register' ? (
//             <Register
//               setPhone={setPhone}
//               setEmail={setEmail}
//               setName={setName}
//               setAddress={setAddress}
//               navigate={navigate}
//             />
//           ) : null}
//         </Paper>
//       </Center>
//     </form>
//   );
// };

// export default AuthRoot;
import React from 'react';

const index = () => {
  return <div>index</div>;
};

export default index;
