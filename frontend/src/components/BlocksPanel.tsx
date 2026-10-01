import { useState, useMemo } from 'react';
import { Table, Badge, PanelTabs, Button } from './ui';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { fmtNumber } from '../hooks/useApi';
import type { ApiState, ApiDagBlock } from '../types';

interface BlocksPanelProps {
  state: ApiState | null;
  loading: boolean;
}

export function BlocksPanel({ state, loading }: BlocksPanelProps) {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [search, setSearch] = useState('');
  const [sortBy, _setSortBy] = useState<'height' | 'blue_score' | 'timestamp' | 'txs'>('height');
  const [sortDir, _setSortDir] = useState<'asc' | 'desc'>('desc');

  const blocks: ApiDagBlock[] = state?.node?.dag || [];

  const filteredBlocks = useMemo(() => {
    let result = [...blocks];
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(b =>
        b.id.toLowerCase().includes(s) ||
        b.height.toString().includes(s) ||
        (b.miner || '').toLowerCase().includes(s)
      );
    }
    result.sort((a, b) => {
      const getVal = (block: ApiDagBlock, key: string): string | number => {
        switch (key) {
          case 'height': return block.height;
          case 'blue_score': return block.blue_score;
          case 'timestamp': return block.timestamp;
          case 'txs': return block.txs.length;
          default: return '';
        }
      };
      const av = getVal(a, sortBy);
      const bv = getVal(b, sortBy);
      if (typeof av === 'string' && typeof bv === 'string') {
        const aLow = av.toLowerCase();
        const bLow = bv.toLowerCase();
        if (aLow < bLow) return sortDir === 'asc' ? -1 : 1;
        if (aLow > bLow) return sortDir === 'asc' ? 1 : -1;
        return 0;
      }
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    return result;
  }, [blocks, search, sortBy, sortDir]);

  const totalPages = Math.ceil(filteredBlocks.length / pageSize);
  const paginatedBlocks = filteredBlocks.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-2xl font-medium text-fg">Blocks</h2>
          <Badge variant={loading ? 'warn' : 'ok'}>{blocks.length} blocks</Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input
              type="text"
              placeholder="Search blocks…"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="input pl-8 w-full sm:w-64 max-w-full"
            />
          </div>
        </div>
      </div>

      <PanelTabs
        tabs={[
          { id: 'all', label: 'All' },
          { id: 'blue', label: 'Blue' },
          { id: 'red', label: 'Red' },
          { id: 'tips', label: 'Tips' },
        ]}
        activeTab="all"
        onTabChange={() => {}}
      />

      <div className="panel">
        <Table
          headers={['Height', 'ID', 'Blue', 'Parents', 'TXs', 'Miner', 'Timestamp', 'Blue Score']}
          rows={paginatedBlocks.map(b => [
            b.height,
            b.id.slice(0, 16) + '…',
            b.is_blue ? 'Blue' : 'Red',
            b.parents.length,
            b.txs.length,
            b.miner.slice(0, 12) + '…',
            new Date(b.timestamp * 1000).toLocaleString(),
            fmtNumber(b.blue_score),
          ])}
        />
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}><ChevronLeft size={16} /></Button>
          <span className="text-sm text-muted">Page {page} of {totalPages}</span>
          <Button variant="secondary" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}><ChevronRight size={16} /></Button>
        </div>
      )}
    </div>
  );
}