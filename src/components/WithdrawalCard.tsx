import { FC, useState } from "react";

const WithdrawalCard: FC<{ item: any }> = ({ item }) => {
  const [collapsed, setCollapsed] = useState(false);

  // const Details = {
  //   wallet: ({ details }: { details: any }) => (
  //     <div class="grid gap-1 w-full">
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">CRYPTOCURRENCY NAME</span>
  //         <span class="text-xs">{details["name"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">ADDRESS</span>
  //         <span class="text-xs">{details["address"]}</span>
  //       </div>
  //     </div>
  //   ),
  //   paypal: ({ details }: { details: any }) => (
  //     <div class="grid gap-1 w-full">
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">PAYPAL EMAIL</span>
  //         <span class="text-xs">{details["email"]}</span>
  //       </div>
  //     </div>
  //   ),
  //   bank: ({ details }: { details: any }) => (
  //     <div class="grid gap-1 w-full">
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">BANK NAME</span>
  //         <span class="text-xs">{details["bankName"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">BANK ADDRESS</span>
  //         <span class="text-xs">{details["bankAddress"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">BANK CITY</span>
  //         <span class="text-xs">{details["bankCity"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">BANK COUNTRY</span>
  //         <span class="text-xs">{details["bankCountry"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">BANK ACCOUNT NUMBER / IBAN</span>
  //         <span class="text-xs">{details["bankAccountNumber"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">SWIFT CODE</span>
  //         <span class="text-xs">{details["swiftCode"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">YOUR FIRST AND LAST NAME</span>
  //         <span class="text-xs">{details["name"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">YOUR ADDRESS</span>
  //         <span class="text-xs">{details["address"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">YOUR COUNTRY</span>
  //         <span class="text-xs">{details["country"]}</span>
  //       </div>
  //       <div class="flex items-center justify-between">
  //         <span class="text-base">YOUR CITY</span>
  //         <span class="text-xs">{details["city"]}</span>
  //       </div>
  //     </div>
  //   ),
  // };

  return (
    <div class="h-auto w-full my-3 grid items-center justify-center justify-items-center bg-slate-800 border-gray-400/50 rounded-md border py-1 text-white outline-none">
      <div class="grid grid-cols-3 w-[inherit]">
        <div class="text-start grid gap-1">
          <span class="text-base">
            {item?.type === "wallet"
              ? "WALLET"
              : item?.type === "bank"
              ? "BANK TRANSFER"
              : "PAYPAL"}
          </span>
          <span class="text-xs font-light text-start">
            {item?.type === "wallet"
              ? "CRYPTOCURRENCY NAME"
              : item?.type === "bank"
              ? "BANK ACCOUNT NUMBER/IBAN"
              : "PAYPAL EMAIL"}
          </span>
          <span class="text-sm font-normal text-start">
            {item?.type === "wallet"
              ? item?.name
              : item?.type === "bank"
              ? item?.bankAccountNumber
              : item?.email}
          </span>
        </div>
        <div class="text-center flex items-center justify-center">
          <span>ADDRESS</span>
        </div>
        <div class="grid items-end justify-end justify-items-end">
          <button
            class="px-2 py-1 bg-blue-400 rounded-sm"
            onClick={setCollapsed((_prev) => !_prev)}>
            DETAILS
          </button>
        </div>
      </div>
      <div class="w-full"></div>
    </div>
  );
};
export default WithdrawalCard;
