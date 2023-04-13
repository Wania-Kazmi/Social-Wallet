"use client";
import { supportedSocialConnectors } from "@zerodevapp/wagmi/connectkit";
import { supportedConnectors } from "connectkit";
supportedConnectors.push(...supportedSocialConnectors);

import {
  SocialWalletConnector,
  GoogleSocialWalletConnector,
  FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
} from "@zerodevapp/wagmi";
import { configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { createClient } from "wagmi";
import { WagmiConfig } from "wagmi";
import {
  getDefaultClient,
  ConnectKitProvider,
  ConnectKitButton,
} from "connectkit";

function ConnectKitExample() {
  const options = {
    options: { projectId: "14966fd4-83b1-4c71-989c-fd7a2142addf" },
  };

  const client = createClient(
    getDefaultClient({
      appName: "Your App Name",
      chains: [polygonMumbai],
      connectors: [
        new GoogleSocialWalletConnector(options),
        new FacebookSocialWalletConnector(options),
        new GithubSocialWalletConnector(options),
        new DiscordSocialWalletConnector(options),
        new TwitchSocialWalletConnector(options),
        new TwitterSocialWalletConnector(options),
      ],
      autoConnect: false,
    })
  );

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
export default ConnectKitExample;
