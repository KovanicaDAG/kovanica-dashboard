import { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/ui';
import { OverviewPanel } from './components/OverviewPanel';
import { BlockDagPanel } from './components/BlockDagPanel';
import { BlocksPanel } from './components/BlocksPanel';
import { TransactionsPanel } from './components/TransactionsPanel';
import { AddressesPanel } from './components/AddressesPanel';
import { MempoolPanel } from './components/MempoolPanel';
import { NetworkPanel } from './components/NetworkPanel';
import { ConsensusPanel } from './components/ConsensusPanel';
import { TokensPanel } from './components/TokensPanel';
import { HtlcPanel } from './components/HtlcPanel';
import { MultisigPanel } from './components/MultisigPanel';
import { FaucetPanel } from './components/FaucetPanel';
import { MiningPanel } from './components/MiningPanel';
import { ApiConsolePanel } from './components/ApiConsolePanel';
import { MetricsPanel } from './components/MetricsPanel';
import { OpsPanel } from './components/OpsPanel';
import { useHead, useBootstrap, useStateNode, useWebSocket, fmtKvnc } from './hooks/useApi';
import type { WsMsg } from './types';

interface Panel {
  id: string;
  label: string;
  icon: string;
}

const PANELS: Panel[] = [
  { id: 'overview', label: 'Overview', icon: 'home' },
  { id: 'blockdag', label: 'BlockDAG', icon: 'git-branch' },
  { id: 'blocks', label: 'Blocks', icon: 'database' },
  { id: 'txs', label: 'Transactions', icon: 'activity' },
  { id: 'addresses', label: 'Addresses', icon: 'users' },
  { id: 'mempool', label: 'Mempool', icon: 'clock' },
  { id: 'network', label: 'Network', icon: 'globe' },
  { id: 'consensus', label: 'Consensus', icon: 'shield' },
  { id: 'tokens', label: 'Tokens', icon: 'coins' },
  { id: 'htlc', label: 'HTLC', icon: 'swap' },
  { id: 'multisig', label: 'Multisig', icon: 'users-round' },
  { id: 'faucet', label: 'Faucet', icon: 'droplet' },
  { id: 'mining', label: 'Mining', icon: 'pickaxe' },
  { id: 'api', label: 'API Console', icon: 'terminal' },
  { id: 'metrics', label: 'Metrics', icon: 'bar-chart-2' },
  { id: 'ops', label: 'Ops', icon: 'settings' },
];

type PanelId = Panel['id'];

function App() {
  const [activePanel, setActivePanel] = useState<PanelId>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { data: head, loading: headLoading } = useHead(5000);
  const { data: bootstrap, loading: bootLoading } = useBootstrap(5000);
  const { data: state, loading: stateLoading } = useStateNode(5000);
  const loading = headLoading || bootLoading || stateLoading;

  const [wsConnected, setWsConnected] = useState(false);
  const [lastBlock, setLastBlock] = useState<string | null>(null);
  const [txCount, setTxCount] = useState(0);

  const handleWsMessage = useCallback((msg: WsMsg) => {
    switch (msg.type) {
      case 'block':
        setLastBlock(msg.id);
        break;
      case 'tx':
        setTxCount(c => c + 1);
        break;
      case 'tip':
        break;
      case 'peer':
        break;
      case 'state':
        break;
    }
  }, []);

  useWebSocket(handleWsMessage);

  useEffect(() => {
    const int = setInterval(() => setWsConnected(Math.random() > 0.1), 5000);
    return () => clearInterval(int);
  }, []);

  const renderPanel = () => {
    switch (activePanel) {
      case 'overview': return <OverviewPanel head={head} bootstrap={bootstrap} state={state} loading={loading} />;
      case 'blockdag': return <BlockDagPanel state={state} loading={loading} />;
      case 'blocks': return <BlocksPanel state={state} loading={loading} />;
      case 'txs': return <TransactionsPanel state={state} loading={loading} />;
      case 'addresses': return <AddressesPanel state={state} loading={loading} />;
      case 'mempool': return <MempoolPanel state={state} loading={loading} />;
      case 'network': return <NetworkPanel bootstrap={bootstrap} state={state} loading={loading} />;
      case 'consensus': return <ConsensusPanel bootstrap={bootstrap} state={state} loading={loading} />;
      case 'tokens': return <TokensPanel state={state} loading={loading} />;
      case 'htlc': return <HtlcPanel />;
      case 'multisig': return <MultisigPanel />;
      case 'faucet': return <FaucetPanel state={state} loading={loading} />;
      case 'mining': return <MiningPanel state={state} loading={loading} />;
      case 'api': return <ApiConsolePanel />;
      case 'metrics': return <MetricsPanel />;
      case 'ops': return <OpsPanel />;
      default: return <OverviewPanel head={head} bootstrap={bootstrap} state={state} loading={loading} />;
    }
  };

  return (
    <Layout sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}>
      {renderPanel()}
    </Layout>
  );
}

export default App;