import '../styles/globals.css';
import type { AppProps } from 'next/app';
import * as MdIcons from 'react-icons/md';
import * as st from '../styles/App.styled';
import Providers from 'contexts/Providers';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <Providers>
      <Component {...pageProps} />
      <st.CopyRightDiv>
        <MdIcons.MdCopyright /> Matto {year}
      </st.CopyRightDiv>
    </Providers>
  );
};

export default MyApp;
