import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

import { connectors } from "services/web3/connectors";

export const useEagerConnect = () => {
  const { activate, active } = useWeb3React();
  const { "0": injected } = connectors;
  const [tried, setTried] = useState(false);

  useEffect(() => {
    void injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch((error: unknown) => {
          setTried(true);
          console.error(error);
        });
      } else {
        setTried(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
};
