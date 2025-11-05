import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia, polygonAmoy, baseSepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Web3 Social',
  projectId: 'YOUR_PROJECT_ID', // Get from WalletConnect Cloud
  chains: [sepolia, polygonAmoy, baseSepolia],
  ssr: false,
});
