"use client";

import { getZeroDevSigner, getSocialWalletOwner } from "@zerodevapp/sdk";
import { SocialWallet } from "@zerodevapp/social-wallet";
import { useMemo, useState } from "react";



function RpcProviderExample() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const socialWallet = useMemo(() => {
    return new SocialWallet();
  }, []);

  const createWallet = async () => {
    setLoading(true);
    const signer = await getZeroDevSigner({
      projectId: "14966fd4-83b1-4c71-989c-fd7a2142addf",
      owner: await getSocialWalletOwner(
        "14966fd4-83b1-4c71-989c-fd7a2142addf",
        socialWallet
      ),
    });
    setAddress(await signer.getAddress());
    setLoading(false);
  };

  const disconnect = async () => {
    await socialWallet.disconnect();
    setAddress("");
  };

  const connected = !!address;

  return (
    <div>
      {connected && (
        <div>
          <label>Wallet: {address}</label>
        </div>
      )}
      <div>
        {!connected && (
          <button onClick={createWallet} disabled={loading}>
            {loading ? "loading..." : "Create Wallet"}
          </button>
        )}
        {connected && (
          <button onClick={disconnect} disabled={loading}>
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
}
export default RpcProviderExample;