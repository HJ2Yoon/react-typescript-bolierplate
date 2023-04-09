import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import themeList, { Theme } from './theme';
import GlobalStyle from './global-styles';
import { useRecoilValue } from 'recoil';
import { themeAtom } from '../model/atom';

interface Props {
  children?: ReactElement | ReactElement[] | string;
}
export default function GlobalThemeProvider({ children }: Props) {
  const curTheme = useRecoilValue(themeAtom);
  return (
    <ThemeProvider
      theme={curTheme === Theme.LIGHT ? themeList.light : themeList.dark}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
