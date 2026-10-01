import { useState } from 'react';
import { Table, Badge, Input, Button } from './ui';
import { PanelTabs } from './ui/PanelTabs';
import { Search } from 'lucide-react';
import { fmtNumber, fmtKvnc } from '../hooks/useApi';
import { useDexTokens } from '../hooks/useApi';

interface TokensPanelProps {
  state: any;
  loading: boolean;
}

export function TokensPanel({ state: _state, loading }: TokensPanelProps) {
  const [activeTab, setActiveTab] = useState<'dex' | 'tokens' | 'nfts' | 'collections'>('dex');
  const [search, setSearch] = useState('');

  const { data: dexTokens, loading: dexLoading } = useDexTokens();

  const [tokenId, setTokenId] = useState('');
  const [nftId, setNftId] = useState('');
  const [collectionId, setCollectionId] = useState('');

  const handleTabChange = (id: string) => setActiveTab(id as 'dex' | 'tokens' | 'nfts' | 'collections');

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-2xl font-medium text-fg">Tokens & Assets</h2>
          <Badge variant={loading ? 'warn' : 'ok'}>KVP-102/106</Badge>
        </div>
      </div>

      <PanelTabs
        tabs={[
          { id: 'dex', label: 'DEX Tokens' },
          { id: 'tokens', label: 'Tokens (KVP-102)' },
          { id: 'nfts', label: 'NFTs (KVP-106)' },
          { id: 'collections', label: 'Collections' },
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {activeTab === 'dex' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted" size={16} />
              <input
                type="text"
                placeholder="Search DEX tokens…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input pl-8 w-full sm:w-64 max-w-full"
              />
            </div>
          </div>
          <div className="panel overflow-auto">
            {dexLoading ? (
              <p className="text-muted text-center py-8">Loading DEX tokens…</p>
            ) : dexTokens && dexTokens.length > 0 ? (
              <Table
                headers={['Asset ID', 'Symbol', 'Name', 'Decimals', 'KVNC Reserve', 'Asset Reserve', 'Price (KVNC)', '24h Volume']}
                rows={dexTokens
                  .filter(t => t.symbol.toLowerCase().includes(search.toLowerCase()) || t.name.toLowerCase().includes(search.toLowerCase()))
                  .map(t => [
                    t.asset_id.slice(0, 16) + '…',
                    t.symbol,
                    t.name,
                    t.decimals,
                    fmtKvnc(t.reserve_kvnc),
                    fmtNumber(t.reserve_asset),
                    t.price_kvnc.toFixed(8),
                    fmtNumber(t.volume_24h),
                  ])}
              />
            ) : (
              <p className="text-muted text-center py-8">No DEX tokens found</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'tokens' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              label="Token ID"
              value={tokenId}
              onChange={e => setTokenId(e.target.value)}
              placeholder="Enter token asset ID"
              className="input w-full sm:w-96 max-w-full"
            />
            <Button onClick={() => tokenId && window.open(`/api/token/${tokenId}`, '_blank')}>View Token</Button>
          </div>
          <p className="text-muted">Use the API Console to query /api/token/&#123;id&#125; for full token details.</p>
        </div>
      )}

      {activeTab === 'nfts' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              label="NFT ID"
              value={nftId}
              onChange={e => setNftId(e.target.value)}
              placeholder="Enter NFT asset ID"
              className="input w-full sm:w-96 max-w-full"
            />
            <Button onClick={() => nftId && window.open(`/api/nft/${nftId}`, '_blank')}>View NFT</Button>
          </div>
          <p className="text-muted">Use the API Console to query /api/nft/&#123;id&#125; for full NFT details.</p>
        </div>
      )}

      {activeTab === 'collections' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              label="Collection ID"
              value={collectionId}
              onChange={e => setCollectionId(e.target.value)}
              placeholder="Enter collection ID"
              className="input w-full sm:w-96 max-w-full"
            />
            <Button onClick={() => collectionId && window.open(`/api/collection/${collectionId}`, '_blank')}>View Collection</Button>
          </div>
          <p className="text-muted">Use the API Console to query /api/collection/&#123;id&#125; for full collection details.</p>
        </div>
      )}
    </div>
  );
}