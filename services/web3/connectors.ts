import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export enum Connectors {
  Injected,
  WalletConnect,
  Coinbase,
}

const RPC_URLS = {
  1: process.env.NEXT_PUBLIC_RPC_URL_1 as string,
  5: process.env.NEXT_PUBLIC_RPC_URL_5 as string,
};

const injected = new InjectedConnector({
  supportedChainIds: [1],
});

const walletconnect = new WalletConnectConnector({
  bridge: "https://bridge.walletconnect.org",
  chainId: 1,
  qrcode: true,
  rpc: RPC_URLS,
});

const coinbase = new WalletLinkConnector({
  appName: "Chainlife",
  supportedChainIds: [1],
  url: RPC_URLS[1],
});

export const connectors = {
  [Connectors.Coinbase]: coinbase,
  [Connectors.Injected]: injected,
  [Connectors.WalletConnect]: walletconnect,
};
