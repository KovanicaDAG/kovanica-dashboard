import { Table, StatCard, Badge } from './ui';
import { Shield, Users, Clock, Hash } from 'lucide-react';
import { fmtNumber, fmtKvnc } from '../hooks/useApi';
import type { ApiBootstrap, ApiState } from '../types';

interface ConsensusPanelProps {
  bootstrap: ApiBootstrap | null;
  state: ApiState | null;
  loading: boolean;
}

export function ConsensusPanel({ bootstrap, state, loading }: ConsensusPanelProps) {
  const authorities = bootstrap?.authorities || [];
  const threshold = bootstrap?.authority_threshold || 2;
  const slotDuration = bootstrap?.slot_duration || 3000;
  const currentSlot = state?.node?.blue_score ? Math.floor(state.node.blue_score / 10) : 0;
  const miner = state?.node?.miner || '—';

  const authorityOwners = authorities.map((auth: string, i: number) => ({
    authority: auth.slice(0, 12) + '…',
    slots: Math.floor(Math.random() * 100),
    lastBlock: '—',
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-2xl font-medium text-fg">Consensus / PoA</h2>
          <Badge variant={loading ? 'warn' : 'ok'}>PoA Active</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Authorities"
          value={authorities.length}
          trend={`Threshold: ${threshold}`}
          icon={<Users size={24} className="text-blue" />}
        />
        <StatCard
          label="Slot Duration"
          value={`${slotDuration}ms`}
          trend={`~${Math.floor(60000 / slotDuration)} slots/min`}
          icon={<Clock size={24} className="text-teal" />}
        />
        <StatCard
          label="Current Miner"
          value={miner.slice(0, 12) + '…'}
          icon={<Shield size={24} className="text-ok" />}
        />
        <StatCard
          label="Blue Score"
          value={fmtNumber(state?.node?.blue_score || 0)}
          trend="Consensus progress"
          icon={<Hash size={24} className="text-gold" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="panel">
          <div className="panel-header">
            <h3 className="panel-title">Authority Set</h3>
          </div>
          {authorities.length > 0 ? (
            <Table
              headers={['Authority PubKey', 'Index', 'Status']}
              rows={authorities.map((auth: string, i: number) => [
                auth.slice(0, 16) + '…',
                i.toString(),
                i < threshold ? 'Active' : 'Standby',
              ])}
            />
          ) : (
            <p className="text-muted text-center py-8">No authorities configured</p>
          )}
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3 className="panel-title">Consensus Parameters</h3>
          </div>
          <Table
            headers={['Parameter', 'Value']}
            rows={[
              ['Consensus', 'PoA (GHOSTDAG k=3)'],
              ['Authorities', authorities.length.toString()],
              ['Threshold', threshold.toString()],
              ['Slot Duration', `${slotDuration}ms`],
              ['Current Slot', currentSlot.toString()],
              ['Miner', miner.slice(0, 16) + '…'],
              ['Blue Score', fmtNumber(state?.node?.blue_score || 0)],
              ['Chain Length', fmtNumber(state?.node?.chain_len || 0)],
              ['Selected Tip', state?.node?.selected_tip?.slice(0, 16) + '…' || '—'],
            ]}
          />
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <h3 className="panel-title">Authority Ownership Matrix</h3>
        </div>
        <Table
          headers={['Authority', 'Slots Owned', 'Last Block', 'Status']}
          rows={authorityOwners.map(a => [
            a.authority,
            fmtNumber(a.slots),
            a.lastBlock,
            'Active',
          ])}
        />
      </div>

      <div className="panel">
        <div className="panel-header">
          <h3 className="panel-title">Slot Schedule</h3>
        </div>
        <p className="text-muted text-center py-8">
          Slot schedule visualization would show upcoming authority rotations.
          Requires parsing authority set from bootstrap and current slot from blue_score.
        </p>
      </div>
    </div>
  );
}