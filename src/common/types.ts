export interface IDrawerMenu {
  menuOpen: boolean;
  menuToggle: () => void;
  navigate: (to: string) => void;
}

export interface IUserData {
  id: number | null;
  phone: string;
  email: string;
  name: string;
  address: string;
  role: string;
}

export interface IUser {
  token: string;
  userData: IUserData;
}

export interface IAuthState {
  user: IUser;
  isLogged: boolean;
}

export interface IPropsLoginForm {
  email: string;
  phone: string;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
}

// export interface IPropsRegisterForm extends IPropsLoginForm {
export interface IPropsRegisterForm {
  name: string;
  address: string;
  setName: (value: string) => void;
  setAddress: (value: string) => void;
}

// export interface IPropsLogin extends IPropsLoginForm {
//   navigate: (to: string) => void;
// }

export interface IPropsSubmitButton {
  text: string;
  navigate: (to: string) => void;
}

export interface ILoginData {
  email: string;
  phone: string;
}

export interface IRegisterData {
  email: string;
  phone: string;
  name: string;
  address: string;
}

// export interface IPropsCustomerData extends IPropsLoginForm {
//   setName: (value: string) => void;
//   setAddress: (value: string) => void;
//   switchForm: boolean;
//   setSwitchForm: (value: boolean) => void;
// }

export interface IPropsEdit {
  color: 'primary' | 'warning';
  onHide: () => void;
  // name: string;
  setName: (value: string) => void;
  // address: string;
  setAddress: (value: string) => void;
}
