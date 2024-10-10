import React, { useRef, useEffect } from 'react';
import {
  createOkxSwapWidget,
  ProviderType,
  OkxSwapWidgetProps,
  OkxEvents,
  OkxEventHandler,
  IWidgetConfig,
} from '@okxweb3/dex-widget';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const WidgetPage: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const params: OkxSwapWidgetProps['params'] = {
      width: 450,
      providerType: ProviderType.EVM,
      theme: 'light',
      tokenPair: {
        fromChain: 196, //X Layer
        toChain: 196, // X Layer
        fromToken: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // OKB
        toToken: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
      },
    };

    // tokenPair: {
    //   fromChain: 196, //ETH
    //   toChain: 196, // ETH
    //   fromToken: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // OKB
    //   toToken: '0xe7e267284e38461c951e7d464958c8c717c9da9d', // XINU
    // },

    const provider = window.ethereum;

    const listeners: IWidgetConfig['listeners'] = [
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