import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';

export const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Web3 Wallet
        </CardTitle>
        <CardDescription>Connect your wallet to send crypto</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ConnectButton />
        {isConnected && address && (
          <div className="space-y-2 p-4 bg-muted rounded-lg">
            <div className="text-sm">
              <p className="font-medium">Connected Wallet</p>
              <p className="text-xs text-muted-foreground truncate">{address}</p>
            </div>
            {balance && (
              <div className="text-sm">
                <p className="font-medium">Balance</p>
                <p className="text-lg font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {parseFloat(formatEther(balance.value)).toFixed(4)} {balance.symbol}
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
