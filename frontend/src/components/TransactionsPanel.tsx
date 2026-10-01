import { useState, useMemo } from 'react';
import { Table } from './ui/Table';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { fmtKvnc } from '../hooks/useApi';
import type { ApiState, ApiHistoryTx } from '../types';

interface TransactionsPanelProps {
  state: ApiState | null;
  loading: boolean;
}

export function TransactionsPanel({ state, loading }: TransactionsPanelProps) {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [search, setSearch] = useState('');
  const [sortBy, _setSortBy] = useState<'timestamp' | 'amount' | 'fee' | 'height'>('timestamp');
  const [sortDir, _setSortDir] = useState<'asc' | 'desc'>('desc');

  const allTxs = useMemo(() => {
    const txs: Array<ApiHistoryTx & { blockHeight: number; blockId: string }> = [];
    state?.node?.dag?.forEach(block => {
      block.txs.forEach(txId => {
        txs.push({
          id: txId,
          height: block.height,
          timestamp: block.timestamp,
          is_sender: false,
          counterparty: '',
          amount: 0,
          fee: 0,
          asset_id: null,
          blockHeight: block.height,
          blockId: block.id,
        });
      });
    });
    return txs;
  }, [state]);

  const filteredTxs = useMemo(() => {
    let result = [...allTxs];
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(t =>
        t.id.toLowerCase().includes(s) ||
        t.blockHeight.toString().includes(s)
      );
    }
    result.sort((a, b) => {
      const getVal = (tx: any, key: string): string | number => {
        switch (key) {
          case 'timestamp': return tx.timestamp;
          case 'amount': return tx.amount;
          case 'fee': return tx.fee;
          case 'height': return tx.height;
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
  }, [allTxs, search, sortBy, sortDir]);

  const totalPages = Math.ceil(filteredTxs.length / pageSize);
  const paginatedTxs = filteredTxs.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-2xl font-medium text-fg">Transactions</h2>
          <Badge variant={loading ? 'warn' : 'ok'}>{allTxs.length} transactions</Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input
              type="text"
              placeholder="Search transactions…"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="input pl-8 w-full sm:w-64 max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="panel">
        <Table
          headers={['Block', 'TX ID', 'Amount', 'Fee', 'Asset', 'Time']}
          rows={paginatedTxs.map(t => [
            t.blockHeight,
            t.id.slice(0, 16) + '…',
            fmtKvnc(t.amount),
            fmtKvnc(t.fee),
            t.asset_id?.slice(0, 12) + '…' || 'KVNC',
            new Date(t.timestamp * 1000).toLocaleString(),
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