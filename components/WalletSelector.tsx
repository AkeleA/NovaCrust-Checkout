import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { WalletOption } from "@/lib/types";

const WalletSelector: React.FC<{
  value: string;
  onChange: (value: string) => void;
  wallets: WalletOption[];
}> = ({ value, onChange, wallets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedWallet = wallets.find((w) => w.id === value);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 bg-white border border-[#E0E0E0] rounded-[30px] text-left flex items-center justify-between"
      >
        <span className="text-gray-500">
          {selectedWallet ? (
            <span className="flex items-center gap-3">
              <Image
                src={selectedWallet.icon}
                alt={selectedWallet.name}
                width={20}
                height={20}
              />
              <span className="text-gray-900 font-medium">
                {selectedWallet.name}
              </span>
            </span>
          ) : (
            "Select an option"
          )}
        </span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
            {wallets.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => {
                  onChange(wallet.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
              >
                <Image
                  src={wallet.icon}
                  alt={wallet.name}
                  width={20}
                  height={20}
                />
                <span className="text-gray-900 font-medium">{wallet.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WalletSelector;
