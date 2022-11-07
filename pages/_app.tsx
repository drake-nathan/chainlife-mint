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
      <st.CopyRightDiv>
        <em
          style={{
            fontSize: '12px',
            color: '#9c9c9c',
            marginTop: '-15px',
            paddingLeft: '15px',
            paddingRight: '15px',
            textAlign: 'center',
          }}
        >
          By interacting with this website or the Chainlife smart contract, you agree to
          the{' '}
          <a
            href="https://chainlife.gitbook.io/docs/legal/terms"
            title="Chainlife Terms"
            rel="noreferrer"
            target="blank"
            style={{ textDecoration: 'underline', fontWeight: 500, color: '#3a3a3a' }}
          >
            terms.
          </a>
        </em>
      </st.CopyRightDiv>
    </Providers>
  );
};

export default MyApp;
