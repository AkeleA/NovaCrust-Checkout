import { Currency, WalletOption } from "./types";

export const Currencies: Currency[] = [
  { symbol: "ETH", name: "Ethereum", icon: "/EthIcon.svg" },
  { symbol: "NGN", name: "Naira", icon: "/Ngn.svg" },
  { symbol: "USDT-CELO", name: "USDT on Celo", icon: "/Celo.svg" },
  { symbol: "USDT-TON", name: "USDT on TON", icon: "/Ton.svg" },
  { symbol: "USDT-BNB", name: "USDT on BNB", icon: "/Bnb.svg" },
];

export const Wallets: WalletOption[] = [
  { name: "Metamask", icon: "/Metamask.svg", id: "metamask" },
  { name: "Rainbow", icon: "/Rainbow.svg", id: "rainbow" },
  { name: "WalletConnect", icon: "/Wallet.svg", id: "walletconnect" },
  {
    name: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
    icon: "/Other.svg",
    id: "other",
  },
];
