import React from "react";
import RpcProviderExample from "@/components/ether/Ether";
import WagmiGoogleExample from "@/components/wagmi/Wagmi";
import ConnectKitExample from "@/components/connectKit/ConnectKit";

export default function Home() {
  return (
    <>
    <div className = "bg-white min-h-screen border flex flex-col">
      <h1>Social Wallets</h1>
      <div className="p-8 my-12 mx-80 bg-slate-200 rounded-xl">
        <h1 className="text-black font-bold text-xl text-center">Rpc Provider</h1>
        <div className = "mx-32 my-2 py-3 text-center bg-sky-700 rounded-xl"><RpcProviderExample /></div>
      </div>
      <div className="p-8 my-12 mx-80 bg-slate-200 rounded-xl">
        <h1 className="text-black font-bold text-xl text-center">Wagmi</h1>
        <div className = "mx-32 my-2 py-3 text-center bg-sky-700 rounded-xl"><WagmiGoogleExample /></div>
      </div>
      <div className="p-8 my-12 mx-80 bg-slate-200 rounded-xl">
        <h1 className="text-black font-bold text-xl text-center">Connect Kit</h1>
        <div className = "mx-32 my-2 py-3 text-center bg-sky-700 rounded-xl flex justify-center"><ConnectKitExample /></div>
      </div>
    </div>
    </>
  );
}
