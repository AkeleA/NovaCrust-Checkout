"use client";
import React, { useState } from "react";
import Image from "next/image";
import WalletSelector from "@/components/WalletSelector";
import CurrencyDropdown from "@/components/CurrencyDropdown";
import { FormData } from "@/lib/types";
import {
  CryptoToCashPageProps,
  ComingSoonPageProps,
  ProcessingPageProps,
} from "@/lib/types";
import { Currencies, Wallets } from "@/lib/constants";
import { Copy, Check } from "lucide-react";

const CryptoToCashPage: React.FC<CryptoToCashPageProps> = ({
  formData,
  setFormData,
  handleConvert,
  currencies,
  wallets,
}) => (
  <div className="space-y-6 w-full max-w-lg mx-auto">
    <div className="space-y-6 w-full">
      <div className="bg-white rounded-[30px] h-28 p-6 gap-2 border border-[#E0E0E0]">
        <label className="text-base text-[#828282]">You pay</label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="text-2xl leading-none font-semibold text-black outline-none w-full"
            placeholder="1.00"
          />
          <CurrencyDropdown
            value={formData.fromCurrency}
            onChange={(val) => setFormData({ ...formData, fromCurrency: val })}
            currencies={currencies}
            label="From"
          />
        </div>
      </div>

      <div className="bg-white rounded-[30px] w-full h-28 p-6 gap-2 border border-[#E0E0E0]">
        <label className="text-base text-[#828282]">You receive</label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="text-2xl font-semibold text-black bg-transparent outline-none w-full"
            placeholder="1.00"
          />
          <CurrencyDropdown
            value={formData.toCurrency}
            onChange={(val) => setFormData({ ...formData, toCurrency: val })}
            currencies={currencies}
            label="To"
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col items-start justify-center gap-4 w-full h-24">
      <label className="text-base font-medium text-[#013941]">Pay from</label>
      <WalletSelector
        value={formData.payFrom}
        onChange={(val) => setFormData({ ...formData, payFrom: val })}
        wallets={wallets}
      />
    </div>

    <div className="flex flex-col items-start justify-center gap-4 w-full">
      <label className="text-base font-medium text-[#013941]">Pay to</label>
      <WalletSelector
        value={formData.payTo}
        onChange={(val) => setFormData({ ...formData, payTo: val })}
        wallets={wallets}
      />
    </div>

    <button
      onClick={handleConvert}
      disabled={!formData.payFrom || !formData.payTo}
      className="w-full py-5 px-10 mt-4 bg-[#013941] h-15 text-white rounded-[30px] gap-2 items-center justify-center font-semibold transition-colors disabled:cursor-not-allowed"
    >
      Convert now
    </button>
  </div>
);

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  title,
  email,
  setEmail,
}) => (
  <div className="text-center space-y-6 py-12 max-w-130 w-full mx-auto">
    <h2 className="text-[32px] font-medium text-[#013941] text-center">
      Coming Soon!
    </h2>
    <p className="text-[#4F4F4F] text-xl leading-normal">
      <span>{title} is almost here.</span>
      <br />
      Enter your email and we&apos;ll let you know the moment it&apos;s live.
    </p>

    <div className="flex flex-col items-start justify-center gap-4 max-w-lg mx-auto">
      <label className="text-base font-medium text-[#013941]">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-6 py-4 bg-white border border-[#E0E0E0] rounded-[30px]"
      />
    </div>

    <button
      disabled={!email}
      className="w-full mt-14 mx-auto block py-4 bg-[#013941] text-[#E6FBF2] rounded-[30px] gap-2 font-bold disabled:cursor-not-allowed"
    >
      Update me
    </button>
  </div>
);

const ProcessingPage: React.FC<ProcessingPageProps> = ({
  handleCopy,
  copied,
  setCurrentPage,
}) => (
  <div className="text-center space-y-8 py-12">
    <Image
      src="/logo.svg"
      alt="Processing"
      width={177}
      height={24}
      className="mx-auto mb-12"
    />
    <div className="w-20 h-20 bg-[#219653] rounded-full mx-auto flex items-center justify-center">
      <Check className="w-14 h-14 text-white" strokeWidth={3} />
    </div>

    <div className="space-y-2">
      <h2 className="text-2xl font-medium text-[#000E10] leading-none">
        Your transaction is processing.
      </h2>
      <p className="text-[#4F4F4F] text-lg leading-none">
        The recipient will receive it shortly.
      </p>
    </div>

    <div className="bg-[#F7F7F7] rounded-[10px] px-6 py-4 max-w-lg w-full mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-[#4F4F4F] font-normal text-sm leading-5">
          Transaction ID
        </span>
        <div className="flex items-center gap-2">
          <span className="font-normal text-base leading-5  text-[#013941]">
            NC123456789
          </span>
          <button
            onClick={handleCopy}
            className="hover:bg-gray-200"
            aria-label="Copy transaction ID"
          >
            {copied ? (
              <Check className="w-5 h-5 text-[#013941]" />
            ) : (
              <Copy className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </div>

    <button
      onClick={() => setCurrentPage("crypto-to-cash")}
      className="text-teal-800 font-semibold"
    >
      Go back to home
    </button>
  </div>
);

const CryptoCheckout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "crypto-to-cash" | "cash-to-crypto" | "fiat-loan" | "processing"
  >("crypto-to-cash");
  const [formData, setFormData] = useState<FormData>({
    amount: "1.00",
    fromCurrency: "ETH",
    toCurrency: "NGN",
    payFrom: "",
    payTo: "",
  });
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    if (formData.payFrom && formData.payTo) {
      setCurrentPage("processing");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("NC123456789");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-sans">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Header */}
        {/* <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-teal-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-teal-900">NOVACRUST</span>
          </div>
        </div> */}

        {/* Tab Navigation */}
        {currentPage !== "processing" && (
          <div className="flex bg-[#F2F2F2] rounded-[30px] w-full max-w-98 mx-auto">
            <button
              onClick={() => setCurrentPage("crypto-to-cash")}
              className={`flex py-2 px-4 rounded-[30px] items-center justify-center gap-2 font-medium max-w-30.75 w-full h-8.5 text-sm leading-none transition-all ${
                currentPage === "crypto-to-cash"
                  ? "bg-[#013941] text-[#F8FEFB]"
                  : "text-[#828282]"
              }`}
            >
              Crypto to cash
            </button>
            <button
              onClick={() => setCurrentPage("cash-to-crypto")}
              className={`flex py-2 px-4 rounded-[30px] items-center justify-center gap-2 font-medium max-w-30.75 h-8.5 w-full text-sm leading-none transition-all ${
                currentPage === "cash-to-crypto"
                  ? "bg-[#013941] text-[#F8FEFB]"
                  : "text-[#828282]"
              }`}
            >
              Cash to crypto
            </button>
            <button
              onClick={() => setCurrentPage("fiat-loan")}
              className={`flex py-2 px-4 rounded-[30px] items-center justify-center gap-2 font-medium max-w-36.5 h-8.5 w-full text-[13px] leading-none transition-all ${
                currentPage === "fiat-loan"
                  ? "bg-[#013941] text-[#F8FEFB]"
                  : "text-[#828282]"
              }`}
            >
              Crypto to fiat loan
            </button>
          </div>
        )}

        {/* Content */}
        <div className="bg-white">
          {currentPage === "crypto-to-cash" && (
            <CryptoToCashPage
              formData={formData}
              setFormData={setFormData}
              handleConvert={handleConvert}
              currencies={Currencies}
              wallets={Wallets}
            />
          )}
          {currentPage === "cash-to-crypto" && (
            <ComingSoonPage
              title="Cash to Crypto"
              email={email}
              setEmail={setEmail}
            />
          )}
          {currentPage === "fiat-loan" && (
            <ComingSoonPage
              title="Crypto to Fiat Loan"
              email={email}
              setEmail={setEmail}
            />
          )}
          {currentPage === "processing" && (
            <ProcessingPage
              handleCopy={handleCopy}
              copied={copied}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoCheckout;
