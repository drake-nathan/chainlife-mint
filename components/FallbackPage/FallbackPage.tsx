import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoYoutube } from "react-icons/io";

import * as St from "./Fallback.Syled";
import { useWindowSize } from "hooks/useWindowSize";

const FallbackPage: React.FC = () => {
  const { windowWidth } = useWindowSize();

  return (
    <>
      <St.FallbackContainer>
        <St.LogoContainer>
          <Image
            alt="ChainLife logo"
            height={windowWidth > 600 ? "60" : "40"}
            src={"/chainlife/chainlife.png"}
            width={windowWidth > 600 ? "60" : "40"}
          />
          <St.CLTitle>Chainlife</St.CLTitle>
        </St.LogoContainer>
        <St.LogoContainer>
          <a
            href="https://twitter.com/MonkMatto"
            rel="noreferrer"
            target="blank"
          >
            <Image
              alt="logo"
              height={21}
              src={"/icons/Twitter.svg"}
              width={21}
            />
          </a>
          <a
            href="https://discord.com/invite/AQDwjAa3g2"
            rel="noreferrer"
            target="blank"
          >
            <Image
              alt="logo"
              height={24}
              src={"/icons/Discord-Logo-White.svg"}
              width={24}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCZGHO8oZZcvgdXVyDv-majg/featured"
            rel="noreferrer"
            target="blank"
          >
            <IoLogoYoutube
              id="youtube"
              style={{ height: "24px", width: "24px" }}
            />
          </a>
        </St.LogoContainer>
        <St.Text>
          The mint you are trying access is not currently active.
        </St.Text>
        <Link href="/">
          <St.BackLink>Chainlife Home</St.BackLink>
        </Link>
      </St.FallbackContainer>
    </>
  );
};

export default FallbackPage;
