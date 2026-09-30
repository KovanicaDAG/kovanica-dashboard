import { Menu, Circle } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
  network: string;
  wsConnected: boolean;
  head: any;
  fmtKvnc: (atoms: number) => string;
  lastBlock: string | null;
  txCount: number;
  onMenuClick: () => void;
}

export function Header({ title, subtitle, network, wsConnected, head, fmtKvnc, lastBlock, txCount, onMenuClick }: HeaderProps) {
  const networkColor = network === 'mainnet' ? 'text-net-mainnet' : 'text-net-testnet';
  const networkBg = network === 'mainnet' ? 'bg-net-mainnet/10' : 'bg-net-testnet/10';

  return (
    <header className="h-14 bg-surface border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="btn-secondary p-2 lg:hidden">
          <Menu size={20} />
        </button>
        <div>
          <h1 className="font-display text-xl font-medium text-fg">{title}</h1>
          <p className="text-xs text-muted">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className={`flex items-center gap-2 px-2 py-1 rounded ${networkBg} ${networkColor}`}>
          <Circle className="w-2 h-2" />
          <span className="text-xs font-medium capitalize">{network}</span>
        </div>

        <div className="flex items-center gap-1">
          <Circle className={`w-2 h-2 ${wsConnected ? 'text-ok' : 'text-danger'}`} />
          <span className="text-xs text-muted">WS</span>
        </div>

        {head && (
          <div className="hidden md:flex items-center gap-4 text-xs text-muted">
            <span>Tip: <code className="font-mono">{head.tip?.slice(0, 12)}…</code></span>
            <span>Blocks: {head.blocks?.toLocaleString()}</span>
            <span>Blue: {head.blue_score?.toLocaleString()}</span>
            {lastBlock && <span className="text-ok">New: {lastBlock.slice(0, 8)}</span>}
            {txCount > 0 && <span className="text-blue">TXs: {txCount}</span>}
          </div>
        )}
      </div>
    </header>
  );
}