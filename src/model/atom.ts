import { atom } from 'recoil';
import { Theme } from '../styles/theme';

export const themeAtom = atom({
  key: 'curTheme',
  default: Theme.LIGHT,
});
