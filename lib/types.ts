export interface Currency {
  symbol: string;
  name: string;
  icon: string;
}

export interface WalletOption {
  name: string;
  icon: string;
  id: string;
}

export interface FormData {
  amount: string;
  fromCurrency: string;
  toCurrency: string;
  payFrom: string;
  payTo: string;
}

export interface CryptoToCashPageProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleConvert: () => void;
  currencies: Currency[];
  wallets: WalletOption[];
}

export interface ComingSoonPageProps {
  title: string;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProcessingPageProps {
  handleCopy: () => void;
  copied: boolean;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<
      "crypto-to-cash" | "cash-to-crypto" | "fiat-loan" | "processing"
    >
  >;
}
