import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: null,
});

export const loginComponentState = atom({
  key: 'loginComponentState',
  default: 'signin',
});
