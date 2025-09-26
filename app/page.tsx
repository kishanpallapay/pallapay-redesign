"use client";
import React, { useState } from "react";

import { SmartPagination } from "../components/ui/pagination";
import { Input } from "../components/ui/input";
import { Plus, User } from "lucide-react";
import { DataTable } from "../components/ui/table";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Generate more sample data for pagination demo
  const allTransactionData = Array.from({ length: 23 }, (_, i) => ({
    refId: `12345678901${i}`,
    paymentAmount: `${(Math.random() * 10000 + 1000).toFixed(0)} AED`,
    cryptoAmount: `${(Math.random() * 500 + 100).toFixed(5)} USDT`,
    type: ["Payment Link", "Direct Transfer", "Wallet Transfer"][
      Math.floor(Math.random() * 3)
    ],
    status: ["Failed", "Success", "Pending"][Math.floor(Math.random() * 3)],
    date: `${Math.floor(Math.random() * 28) + 1}/08/2025, ${
      Math.floor(Math.random() * 12) + 1
    }:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, "0")}`,
  }));

  const totalPages = Math.ceil(allTransactionData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = allTransactionData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const columns = [
    { label: "Ref ID", name: "refId" },
    { label: "Payment Amount", name: "paymentAmount" },
    {
      label: "Crypto Amount",
      name: "cryptoAmount",
      value: (row: any) => (
        <span>
          <span>💲</span> {row.cryptoAmount}
        </span>
      ),
    },
    { label: "Type", name: "type" },
    {
      label: "Status",
      name: "status",
      value: (row: {
        status:
          | string
          | number
          | bigint
          | boolean
          | React.ReactElement<
              unknown,
              string | React.JSXElementConstructor<any>
            >
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | Promise<
              | string
              | number
              | bigint
              | boolean
              | React.ReactPortal
              | React.ReactElement<
                  unknown,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | null
              | undefined
            >
          | null
          | undefined;
      }) => <span>{row.status}</span>,
    },
    { label: "Date", name: "date" },
  ];

  const titleNode = (
    <div>
      <span>All Transactions :</span>
      <div>
        <button>Filter</button>
        <button>Export excel File</button>
      </div>
    </div>
  );
  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <div className="bg-background text-foreground">
        {/* Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="font-exo2-bold text-3xl text-orange">
              CSS Test Suite
            </h1>
            <div className="px-4 py-2 rounded-lg font-exo2-medium text-white bg-orange">
              Dark Mode
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-6 space-y-12">
          {/* Font Family Tests */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="font-exo2-bold text-2xl mb-6 text-orange border-b border-orange-100 pb-2">
              Font Family Tests - Exo2
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="font-exo2-thin text-sm text-muted-foreground">
                  Font Weight: 100
                </p>
                <p className="font-exo2-thin text-lg">
                  Thin - The quick brown fox
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-exo2-extralight text-sm text-muted-foreground">
                  Font Weight: 200
                </p>
                <p className="font-exo2-extralight text-lg">
                  Extra Light - The quick brown fox
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-exo2-light text-sm text-muted-foreground">
                  Font Weight: 300
                </p>
                <p className="font-exo2-light text-lg">
                  Light - The quick brown fox
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-exo2-regular text-sm text-muted-foreground">
                  Font Weight: 400
                </p>
                <p className="font-exo2-regular text-lg">
                  Regular - The quick brown fox
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-exo2-medium text-sm text-muted-foreground">
                  Font Weight: 500
                </p>
                <p className="font-exo2-medium text-lg">
                  Medium - The quick brown fox
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-exo2-semibold text-sm text-muted-foreground">
                  Font Weight: 600
                </p>
                <p className="font-exo2-semibold text-lg">
                  Semi Bold - The quick brown fox
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-exo2-bold text-sm text-muted-foreground">
                  Font Weight: 700
                </p>
                <p className="font-exo2-bold text-lg">
                  Bold - The quick brown fox
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-exo2-extrabold text-sm text-muted-foreground">
                  Font Weight: 800
                </p>
                <p className="font-exo2-extrabold text-lg">
                  Extra Bold - The quick brown fox
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-exo2-black text-sm text-muted-foreground">
                  Font Weight: 900
                </p>
                <p className="font-exo2-black text-lg">
                  Black - The quick brown fox
                </p>
              </div>
            </div>
          </section>

          {/* Primary Colors - Orange */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="font-exo2-bold text-2xl mb-6 text-orange border-b border-orange-100 pb-2">
              Primary Colors - Orange Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-orange h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Orange Main</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #FB8904
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-50 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Orange 50</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #FFF1CC
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Orange 100</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #FFC568
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-200 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Orange 200</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #FFA600
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-300 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Orange 300</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #FF8400
                </p>
              </div>
            </div>
          </section>

          {/* Secondary Colors - Gray */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="font-exo2-bold text-2xl mb-6 text-orange border-b border-orange-100 pb-2">
              Secondary Colors - Gray Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-gray h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm text-white">Gray Main</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #242A2A
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Gray 50</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #F6F6F6
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Gray 100</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #D9D9D9
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Gray 200</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #BEBEBE
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-300 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">Gray 300</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #9A9A9A
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-400 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm text-white">Gray 400</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #747474
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-500 h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm text-white">Gray 500</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #747474
                </p>
              </div>
              <div className="text-center">
                <div className="bg-black h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm text-white">Black</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #0C0C0C
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white h-20 w-full rounded-lg mb-2 border border-gray-200"></div>
                <p className="font-exo2-medium text-sm">White</p>
                <p className="font-exo2-regular text-xs text-muted-foreground">
                  #FFFFFF
                </p>
              </div>
            </div>
          </section>

          {/* State Colors */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="font-exo2-bold text-2xl mb-6 text-orange border-b border-orange-100 pb-2">
              State Colors
            </h2>

            {/* Info Colors */}
            <div className="mb-8">
              <h3 className="font-exo2-semibold text-lg mb-4 text-info">
                Info Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="text-center">
                  <div className="bg-info-50 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Info 50</p>
                </div>
                <div className="text-center">
                  <div className="bg-info-100 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Info 100</p>
                </div>
                <div className="text-center">
                  <div className="bg-info-200 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Info 200</p>
                </div>
                <div className="text-center">
                  <div className="bg-info-300 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Info 300</p>
                </div>
                <div className="text-center">
                  <div className="bg-info-400 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Info 400</p>
                </div>
                <div className="text-center">
                  <div className="bg-info-500 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm text-white">
                    Info 500
                  </p>
                </div>
              </div>
            </div>

            {/* Success Colors */}
            <div className="mb-8">
              <h3 className="font-exo2-semibold text-lg mb-4 text-success">
                Success Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="text-center">
                  <div className="bg-success-50 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Success 50</p>
                </div>
                <div className="text-center">
                  <div className="bg-success-100 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Success 100</p>
                </div>
                <div className="text-center">
                  <div className="bg-success-200 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Success 200</p>
                </div>
                <div className="text-center">
                  <div className="bg-success-300 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm text-white">
                    Success 300
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-success-400 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm text-white">
                    Success 400
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-success-500 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm text-white">
                    Success 500
                  </p>
                </div>
              </div>
            </div>

            {/* Error Colors */}
            <div className="mb-8">
              <h3 className="font-exo2-semibold text-lg mb-4 text-error">
                Error Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="text-center">
                  <div className="bg-error-50 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Error 50</p>
                </div>
                <div className="text-center">
                  <div className="bg-error-100 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Error 100</p>
                </div>
                <div className="text-center">
                  <div className="bg-error-200 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm text-white">
                    Error 200
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-error-300 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm text-white">
                    Error 300
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-error-400 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm text-white">
                    Error 400
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-error-500 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm text-white">
                    Error 500
                  </p>
                </div>
              </div>
            </div>

            {/* Alert Colors */}
            <div className="mb-8">
              <h3 className="font-exo2-semibold text-lg mb-4 text-alert">
                Alert Colors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="text-center">
                  <div className="bg-alert-50 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Alert 50</p>
                </div>
                <div className="text-center">
                  <div className="bg-alert-100 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Alert 100</p>
                </div>
                <div className="text-center">
                  <div className="bg-alert-200 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Alert 200</p>
                </div>
                <div className="text-center">
                  <div className="bg-alert-300 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Alert 300</p>
                </div>
                <div className="text-center">
                  <div className="bg-alert-400 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Alert 400</p>
                </div>
                <div className="text-center">
                  <div className="bg-alert-500 h-16 w-full rounded-lg mb-2 border border-gray-200"></div>
                  <p className="font-exo2-medium text-sm">Alert 500</p>
                </div>
              </div>
            </div>
          </section>

          {/* Component Examples */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="font-exo2-bold text-2xl mb-6 text-orange border-b border-orange-100 pb-2">
              Component Examples
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Buttons */}
              <div className="space-y-4">
                <h3 className="font-exo2-semibold text-lg">Buttons</h3>
                <div className="space-y-3">
                  <button className="w-full bg-orange text-white px-4 py-2 rounded-lg font-exo2-medium hover:bg-orange-200 transition-colors">
                    Primary Button
                  </button>
                  <button className="w-full bg-success-200 text-white px-4 py-2 rounded-lg font-exo2-medium hover:bg-success-400 transition-colors">
                    Success Button
                  </button>
                  <button className="w-full bg-error-200 text-white px-4 py-2 rounded-lg font-exo2-medium hover:bg-error-400 transition-colors">
                    Error Button
                  </button>
                  <button className="w-full bg-info-200 text-white px-4 py-2 rounded-lg font-exo2-medium hover:bg-info-400 transition-colors">
                    Info Button
                  </button>
                  <button className="w-full bg-alert-200 text-black px-4 py-2 rounded-lg font-exo2-medium hover:bg-alert-300 transition-colors">
                    Alert Button
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                <h3 className="font-exo2-semibold text-lg">Cards</h3>
                <div className="bg-info-50 border border-info-200 rounded-lg p-4">
                  <h4 className="font-exo2-semibold text-info mb-2">
                    Info Card
                  </h4>
                  <p className="font-exo2-regular text-gray text-sm">
                    This is an informational card with custom colors.
                  </p>
                </div>
                <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                  <h4 className="font-exo2-semibold text-success mb-2">
                    Success Card
                  </h4>
                  <p className="font-exo2-regular text-gray text-sm">
                    Operation completed successfully.
                  </p>
                </div>
                <div className="bg-error-50 border border-error-200 rounded-lg p-4">
                  <h4 className="font-exo2-semibold text-error mb-2">
                    Error Card
                  </h4>
                  <p className="font-exo2-regular text-gray text-sm">
                    Something went wrong, please try again.
                  </p>
                </div>
              </div>

              {/* Text Examples */}
              <div className="space-y-4">
                <h3 className="font-exo2-semibold text-lg">Typography</h3>
                <div className="space-y-2">
                  <h1 className="font-exo2-black text-2xl text-orange">
                    Heading 1
                  </h1>
                  <h2 className="font-exo2-bold text-xl text-gray">
                    Heading 2
                  </h2>
                  <h3 className="font-exo2-semibold text-lg text-gray-400">
                    Heading 3
                  </h3>
                  <p className="font-exo2-regular text-base text-gray-300">
                    Regular paragraph text using Exo2 font family.
                  </p>
                  <p className="font-exo2-light text-sm text-gray-200">
                    Light weight text for subtle information.
                  </p>

                  <p className="font-exo2-medium text-xxs text-gray-300">
                    Size xxs (11px)
                  </p>
                  <p className="font-exo2-medium text-xs text-gray-300">
                    Size xs (13px)
                  </p>
                  <p className="font-exo2-medium text-sm text-gray-300">
                    Size sm (14px)
                  </p>
                  <p className="font-exo2-medium text-md text-gray-300">
                    Size md (16px)
                  </p>
                  <p className="font-exo2-medium text-lg text-gray-300">
                    Size lg (18px)
                  </p>
                  <p className="font-exo2-medium text-display-xs text-gray-300">
                    Display xs (24px)
                  </p>
                  <p className="font-exo2-medium text-display-sm text-gray-300">
                    Display sm (30px)
                  </p>
                  <p className="font-exo2-medium text-display-md text-gray-300">
                    Display md (36px)
                  </p>
                  <p className="font-exo2-medium text-display-lg text-gray-300">
                    Display lg (48px)
                  </p>
                  <p className="font-exo2-medium text-display-xl text-gray-300">
                    Display xl (60px)
                  </p>
                  <p className="font-exo2-medium text-display-2xl text-gray-300">
                    Display 2xl (72px)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Border and Text Color Tests */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="font-exo2-bold text-2xl mb-6 text-orange border-b border-orange-100 pb-2">
              Border and Text Color Tests
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-exo2-semibold text-lg mb-4">
                  Border Colors
                </h3>
                <div className="space-y-3">
                  <div className="p-4 border-2 border-orange rounded-lg">
                    <p className="font-exo2-regular">Orange main border</p>
                  </div>
                  <div className="p-4 border-2 border-info-100 rounded-lg">
                    <p className="font-exo2-regular">Info border</p>
                  </div>
                  <div className="p-4 border-2 border-success-100 rounded-lg">
                    <p className="font-exo2-regular">Success border</p>
                  </div>
                  <div className="p-4 border-2 border-error-100 rounded-lg">
                    <p className="font-exo2-regular">Error border</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-exo2-semibold text-lg mb-4">Text Colors</h3>
                <div className="space-y-2">
                  <p className="font-exo2-medium text-orange">
                    Orange main text
                  </p>
                  <p className="font-exo2-medium text-info-400">
                    Info 400 text
                  </p>
                  <p className="font-exo2-medium text-success-400">
                    Success 400 text
                  </p>
                  <p className="font-exo2-medium text-error-400">
                    Error 400 text
                  </p>
                  <p className="font-exo2-medium text-alert-300">
                    Alert 300 text
                  </p>
                  <p className="font-exo2-medium text-gray-300">
                    Gray 300 text
                  </p>
                  <p className="font-exo2-medium text-gray-500">
                    Gray 500 text
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dark Mode Showcase */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="font-exo2-bold text-2xl mb-6 text-orange border-b border-orange-100 pb-2">
              Dark Mode Test
            </h2>
            <p className="font-exo2-regular mb-4">
              Toggle the dark mode button at the top to see how all colors and
              components adapt to dark mode. The colors will automatically
              switch based on your dark mode definitions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background border border-border rounded-lg p-4">
                <p className="font-exo2-semibold">Background Color</p>
                <p className="font-exo2-regular text-sm text-muted-foreground">
                  Automatically adapts to light/dark
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-exo2-semibold">Card Background</p>
                <p className="font-exo2-regular text-sm text-muted-foreground">
                  Card colors adapt too
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-exo2-semibold">Muted Background</p>
                <p className="font-exo2-regular text-sm text-muted-foreground">
                  Subtle background color
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border mt-12 ">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-exo2-regular text-muted-foreground">
              Custom CSS Test Suite - All colors, fonts, and utilities are
              working correctly!
            </p>
            <p className="font-exo2-light text-sm text-muted-foreground mt-2">
              !@#$%^&*()_+=-?/.,:;{[]}
            </p>
          </div>
        </footer>
        <Input value="dfgbhfghfg" />
        <DataTable
          titleNode={titleNode}
          columns={columns}
          data={currentData}
          pagination={{
            currentPage,
            totalPages,
            onPageChange: handlePageChange,
            showFirstLast: true,
            maxVisiblePages: 5,
          }}
        />
      </div>
    </div>
  );
}
