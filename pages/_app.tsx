import type { AppProps } from "next/app";

import { MdCopyright } from "react-icons/md";

import * as St from "../styles/App.styled";
import "../styles/globals.css";
import Providers from "contexts/Providers";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Providers>
      <Component {...pageProps} />
      <St.CopyRightDiv>
        <MdCopyright /> Matto {year}
      </St.CopyRightDiv>
      <St.CopyRightDiv>
        <em
          style={{
            color: "#9c9c9c",
            fontSize: "12px",
            marginTop: "-15px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textAlign: "center",
          }}
        >
          By interacting with this website or the Chainlife smart contract, you
          agree to the{" "}
          <a
            href="https://chainlife.gitbook.io/docs/legal/terms"
            rel="noreferrer"
            style={{
              color: "#3a3a3a",
              fontWeight: 500,
              textDecoration: "underline",
            }}
            target="blank"
            title="Chainlife Terms"
          >
            terms.
          </a>
        </em>
      </St.CopyRightDiv>
    </Providers>
  );
};

export default MyApp;
