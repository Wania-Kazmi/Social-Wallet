import React from "react";
import RpcProviderExample from "@/components/ether/Ether";
import WagmiGoogleExample from "@/components/wagmi/Wagmi";
import ConnectKitExample from "@/components/connectKit/ConnectKit";

export default function Home(){
  return(
    <div>
      <h1 className="font-bold text-xl">Wallet Connection</h1>
      <h2 className="font-bold text-lg">Rpc Provider</h2>
      <RpcProviderExample />
        <h2 className="font-bold text-lg">Wagmi Google</h2>
        <WagmiGoogleExample />
        <h2 className="font-bold text-lg">Connect Kit</h2>
        <ConnectKitExample />
    </div>
  )
}