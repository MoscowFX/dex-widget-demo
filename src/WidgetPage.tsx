import React, { useRef, useEffect } from "react";
import {
  createOkxSwapWidget,
  ProviderType,
  OkxSwapWidgetProps,
  OkxEvents,
  OkxEventHandler,
  IWidgetConfig,
  TradeType,
  THEME,
} from "@okxweb3/dex-widget";

declare global {
  interface Window {
    ethereum?: any;
    solana? : any;
  }
}

const WidgetPage: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const params: OkxSwapWidgetProps["params"] = {
      width: 450,
      providerType: ProviderType.EVM,
      tradeType: TradeType.AUTO,
    };

    // More params to add
    /*
    theme: "light",
    tradeType: TradeType.SWAP,
    chainIds: ["196", "8453"],
    tokenPair: {
      fromChain: 196, //X Layer
      toChain: 196, // X Layer
      fromToken: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", // OKB
      toToken: "0xdac17f958d2ee523a2206206994597c13d831ec7", // USDT
    },
      feeConfig: {
        196: {
          feePercent: 1,
          referrerAddress: '0x5672539437a5806243c1a557b7e8b914ad546233',
        },
      }
    */

    // demo for custom meme token default selection
    /*    
      tokenPair: {
      fromChain: 196, //ETH
      toChain: 196, // ETH
      fromToken: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // OKB
      toToken: '0xe7e267284e38461c951e7d464958c8c717c9da9d', // XINU
    },
    */
    const provider = window.ethereum;

    const listeners: IWidgetConfig["listeners"] = [
      {
        event: OkxEvents.ON_CONNECT_WALLET,
        handler: (() => {
          provider?.enable();
        }) as OkxEventHandler<OkxEvents.ON_CONNECT_WALLET>,
      },
    ];

    const widgetProps: IWidgetConfig = {
      params,
      provider,
      listeners,
    };

    const instance = createOkxSwapWidget(widgetRef.current, widgetProps);

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className="widget-page">
      <h2>OKX DEX Widget</h2>
      <div ref={widgetRef} />
    </div>
  );
};

export default WidgetPage;
