import {
  AddCard,
  AdminPanelSettingsSharp,
  HistoryEdu,
  HowToReg,
  LockPerson,
  Logout,
  ManageAccounts,
  PersonRemove,
  ShoppingBasket,
  Storefront,
} from '@mui/icons-material';

import { Badge } from '@mui/material';
export const pages = [
  { page: 'Shop', icon: <Storefront />, path: '/shop' },
  {
    page: `Shopping${'\u00A0'}Cart`,
    icon: (
      <Badge badgeContent={1} color='warning'>
        <ShoppingBasket />
      </Badge>
    ),
    path: '/shopping_cart',
  },
  { page: 'History', icon: <HistoryEdu />, path: '/history' },
  {
    page: 'Coupons',
    icon: (
      <Badge badgeContent={1} color='warning'>
        <AddCard />
      </Badge>
    ),
    path: '/coupons',
  },
];

export const logoutActions = [
  { text: 'Logout', icon: <Logout />, path: '/shop' },
  { text: 'Manage Account', icon: <ManageAccounts />, path: '/shop' },
  { text: 'Remove Account', icon: <PersonRemove />, path: '/shop' },
  // {
  //   text: 'Admin Panel',
  //   icon: <AdminPanelSettingsSharp />,
  //   path: '/admin',
  // },
];

export const loginActions = [
  { text: 'Sign Up', icon: <HowToReg />, path: '/register' },
  { text: 'Sign In', icon: <LockPerson />, path: '/login' },
];

export const goods = [
  {
    id: 'js01',
    category: 'books',
    label: 'Big big burger',
    poster:
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    price: 750,
  },
  {
    id: 'js02',
    category: 'books',
    label: 'Hamburger',
    poster:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    price: 1450,
  },
  {
    id: 'js03',
    category: 'books',
    label: 'Cheeseburger',
    poster:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    price: 950,
  },
  {
    id: 'data01',
    category: 'books',
    label: 'Double cheeseburger',
    poster:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    price: 850,
  },
  {
    id: 'js04',
    category: 'books',
    label: 'Big mac',
    poster:
      'https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
    price: 550,
  },
  {
    id: 'video01',
    category: 'video',
    label: 'Hiseburger',
    poster:
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=862&q=80',
    price: 1250,
  },
  {
    id: 'video02',
    category: 'Big burger',
    label: 'Big burger',
    poster:
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80',
    price: 1550,
  },
  {
    id: 'video03',
    category: 'Medium burger',
    label: 'Medium burger',
    poster:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80',
    price: 2250,
  },
  {
    id: 'video04',
    category: 'video',
    label: 'Small burger',
    poster:
      'https://images.unsplash.com/photo-1550784343-6bd0ce5d600b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    price: 1450,
  },
  {
    id: 'sticker01',
    category: 'stickers',
    label: 'Super burger',
    poster:
      'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
    price: 550,
  },
  {
    id: 'sticker02',
    category: 'Big mac menu',
    label: 'Big mac menu',
    poster:
      'https://images.unsplash.com/photo-1496493820873-82288ac48a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
    price: 550,
  },
  {
    id: 'sticker03',
    category: 'stickers',
    label: 'Hamburger menu',
    poster:
      'https://images.unsplash.com/photo-1593754500338-969a679d5ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    price: 1550,
  },
  {
    id: 'data09',
    category: 'books',
    label: 'Double cheeseburger menu',
    poster:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    price: 850,
  },
];

export const shops = [
  `McDonald's`,
  'KFC',
  'Pizza Club',
  'Burger House',
  'McDonny',
  'CFK',
  'JFK',
  'Super Fastfood',
];

export const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];
