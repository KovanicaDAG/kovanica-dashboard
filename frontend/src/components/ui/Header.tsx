import { Menu, Circle } from 'lucide-react';
import type { WsState } from '../../hooks/useApi';
import type { ApiHead } from '../../types';

const WS_COLOR: Record<WsState, string> = {
  connected: 'text-ok',
  connecting: 'text-gold',
  reconnecting: 'text-gold',
  disconnected: 'text-danger',
};

const WS_LABEL: Record<WsState, string> = {
  connected: 'WebSocket connected',
  connecting: 'WebSocket connecting',
  reconnecting: 'WebSocket reconnecting',
  disconnected: 'WebSocket disconnected',
};

interface HeaderProps {
  title: string;
  subtitle: string;
  network: string;
  wsState: WsState;
  head: ApiHead | null;
  fmtKvnc: (atoms: number) => string;
  lastBlock: string | null;
  txCount: number;
  onMenuClick: () => void;
  sidebarOpen: boolean;
  menuButtonRef?: React.Ref<HTMLButtonElement>;
}

export function Header({
  title,
  subtitle,
  network,
  wsState,
  head,
  fmtKvnc,
  lastBlock,
  txCount,
  onMenuClick,
  sidebarOpen,
  menuButtonRef,
}: HeaderProps) {
  // The node reports ids like "kovanica-mainnet" / "kovanica-testnet".
  const isMainnet = network.toLowerCase().includes('mainnet');
  const networkColor = isMainnet ? 'text-net-mainnet' : 'text-net-testnet';
  const networkBg = isMainnet ? 'bg-net-mainnet/10' : 'bg-net-testnet/10';

  return (
    <header className="h-14 shrink-0 bg-surface border-b border-border flex items-center justify-between gap-2 px-3 sm:px-4">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          type="button"
          ref={menuButtonRef}
          onClick={onMenuClick}
          className="btn-secondary p-2 min-h-[44px] min-w-[44px] shrink-0 lg:hidden"
          aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={sidebarOpen}
          aria-controls="dashboard-sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="min-w-0">
          <h1 className="font-display text-lg sm:text-xl font-medium text-fg truncate max-w-[50vw] sm:max-w-none">{title}</h1>
          <p className="hidden sm:block text-xs text-muted truncate">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {network && (
          <div className={`flex items-center gap-2 px-2 py-1 rounded ${networkBg} ${networkColor}`}>
            <Circle className="w-2 h-2" />
            <span className="text-xs font-medium truncate max-w-[10rem]">{network}</span>
          </div>
        )}

        <div
          className="flex items-center gap-1"
          title={WS_LABEL[wsState]}
          aria-label={WS_LABEL[wsState]}
          role="status"
          aria-live="polite"
        >
          <Circle className={`w-2 h-2 ${WS_COLOR[wsState]}`} />
          <span className="hidden sm:inline text-xs text-muted">WS</span>
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
