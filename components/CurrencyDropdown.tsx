import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import { Currency } from "@/lib/types";

const CurrencyDropdown: React.FC<{
  value: string;
  onChange: (value: string) => void;
  currencies: Currency[];
  label: string;
}> = ({ value, onChange, currencies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedCurrency = currencies.find((c) => c.symbol === value);
  const filteredCurrencies = currencies.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-300 transition-colors"
      >
        {selectedCurrency?.icon && (
          <Image
            src={selectedCurrency.icon}
            alt={selectedCurrency.name}
            width={20}
            height={20}
          />
        )}
        <span className="font-medium text-gray-900">{value}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {filteredCurrencies.map((currency) => (
                <button
                  key={currency.symbol}
                  onClick={() => {
                    onChange(currency.symbol);
                    setIsOpen(false);
                    setSearchQuery("");
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <Image
                    src={currency.icon}
                    alt={currency.name}
                    width={20}
                    height={20}
                  />
                  <span className="font-medium text-gray-900">
                    {currency.symbol}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrencyDropdown;
