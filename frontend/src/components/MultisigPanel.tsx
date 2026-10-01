import { useState } from 'react';
import { Input, Button, Badge, Table } from './ui';
import { PanelTabs } from './ui/PanelTabs';
import { Copy, AlertCircle, CheckCircle, Users, Plus, Minus } from 'lucide-react';
import { postApi } from '../hooks/useApi';

interface MultisigPanelProps {}

export function MultisigPanel({}: MultisigPanelProps) {
  const [step, setStep] = useState<'create' | 'build' | 'sign' | 'combine' | 'submit'>('create');
  const handleStepChange = (id: string) => setStep(id as 'create' | 'build' | 'sign' | 'combine' | 'submit');
  const [formData, setFormData] = useState({
    m: 2,
    n: 3,
    pubkeys: ['', '', ''],
    script: '',
    amount: '',
    fee: '',
    receiver: '',
    signatures: ['', '', ''],
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (action: string) => {
    setLoading(true);
    try {
      const res = await postApi(`/multisig/${action}`, formData);
      setResult(res);
    } catch (e) {
      setResult({ error: String(e) });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
        <h2 className="font-display text-2xl font-medium text-fg">Multisig (KVP-101)</h2>
        <Badge variant="info">M-of-N P2SH</Badge>
      </div>

      <PanelTabs
        tabs={[
          { id: 'create', label: 'Create' },
          { id: 'build', label: 'Build Tx' },
          { id: 'sign', label: 'Sign' },
          { id: 'combine', label: 'Combine' },
          { id: 'submit', label: 'Submit' },
        ]}
        activeTab={step}
        onTabChange={handleStepChange}
      />

      <div className="panel">
        <form onSubmit={e => { e.preventDefault(); handleSubmit(step); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {step === 'create' && (
              <>
                <Input
                  label="M (required signatures)"
                  type="number"
                  value={formData.m}
                  onChange={e => setFormData({ ...formData, m: parseInt(e.target.value) })}
                />
                <Input
                  label="N (total parties)"
                  type="number"
                  value={formData.n}
                  onChange={e => setFormData({ ...formData, n: parseInt(e.target.value) })}
                />
                {[...Array(Math.max(3, formData.n))].map((_, i) => (
                  <Input
                    key={i}
                    label={`PubKey ${i + 1}`}
                    value={formData.pubkeys[i] || ''}
                    onChange={e => {
                      const pk = [...formData.pubkeys];
                      pk[i] = e.target.value;
                      setFormData({ ...formData, pubkeys: pk });
                    }}
                    placeholder="Ed25519 pubkey hex"
                  />
                ))}
              </>
            )}
            {step === 'build' && (
              <>
                <Input
                  label="Redeem Script (hex)"
                  value={formData.script}
                  onChange={e => setFormData({ ...formData, script: e.target.value })}
                  placeholder="Multisig redeem script"
                />
                <Input
                  label="Amount (atoms)"
                  type="number"
                  value={formData.amount}
                  onChange={e => setFormData({ ...formData, amount: e.target.value })}
                />
                <Input
                  label="Fee (atoms)"
                  type="number"
                  value={formData.fee}
                  onChange={e => setFormData({ ...formData, fee: e.target.value })}
                />
                <Input
                  label="Receiver"
                  value={formData.receiver}
                  onChange={e => setFormData({ ...formData, receiver: e.target.value })}
                  placeholder="kvnc..."
                />
              </>
            )}
            {step === 'sign' && (
              <>
                <Input
                  label="Transaction (hex)"
                  value={formData.script}
                  onChange={e => setFormData({ ...formData, script: e.target.value })}
                  placeholder="Unsigned tx hex"
                />
                <Input
                  label="Private Key (hex)"
                  value={formData.pubkeys[0]}
                  onChange={e => setFormData({ ...formData, pubkeys: [e.target.value, ...formData.pubkeys.slice(1)] })}
                  placeholder="Ed25519 private key"
                />
              </>
            )}
            {step === 'combine' && (
              <>
                <Input
                  label="Transaction (hex)"
                  value={formData.script}
                  onChange={e => setFormData({ ...formData, script: e.target.value })}
                  placeholder="Partially signed tx"
                />
                {[...Array(Math.max(3, formData.n))].map((_, i) => (
                  <Input
                    key={i}
                    label={`Signature ${i + 1} (hex)`}
                    value={formData.signatures[i] || ''}
                    onChange={e => {
                      const sigs = [...formData.signatures];
                      sigs[i] = e.target.value;
                      setFormData({ ...formData, signatures: sigs });
                    }}
                    placeholder="Ed25519 signature"
                  />
                ))}
              </>
            )}
            {step === 'submit' && (
              <>
                <Input
                  label="Signed Transaction (hex)"
                  value={formData.script}
                  onChange={e => setFormData({ ...formData, script: e.target.value })}
                  placeholder="Fully signed tx hex"
                />
              </>
            )}
          </div>

          <div className="flex gap-2">
            <Button type="submit" loading={loading} variant="primary">
              {step === 'create' ? 'Create Multisig' : step === 'build' ? 'Build Tx' : step === 'sign' ? 'Sign' : step === 'combine' ? 'Combine' : 'Submit'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setResult(null)}>Clear</Button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-surface-2 border border-border rounded-lg">
              <h4 className="font-medium mb-2">Result</h4>
              <pre className="text-xs text-fg overflow-auto max-h-64 font-mono">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </form>
      </div>

      <div className="panel">
        <h3 className="panel-title">Multisig Flow</h3>
        <ol className="space-y-2 text-sm text-muted list-decimal list-inside">
          <li><strong>Create:</strong> Generate M-of-N redeem script from N pubkeys</li>
          <li><strong>Build:</strong> Create unsigned transaction spending to multisig address</li>
          <li><strong>Sign:</strong> Each party signs with their private key</li>
          <li><strong>Combine:</strong> Aggregate signatures into final witness</li>
          <li><strong>Submit:</strong> Broadcast fully signed transaction</li>
        </ol>
      </div>
    </div>
  );
}