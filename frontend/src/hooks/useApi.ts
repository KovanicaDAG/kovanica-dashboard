// API hooks for polling and WebSocket
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import type {
  ApiHead, ApiBootstrap, ApiState, ApiUtxos, ApiHistory,
  ApiAddress, ApiNft, ApiCollection, ApiToken, ApiDexToken,
  FeeEstimate, WsMsg, ApiNode, SupplyData
} from '../types';

const API_BASE = '/api';
const WS_URL = '/ws';

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export function useHead(pollMs = 5000) {
  const [data, setData] = useState<ApiHead | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiHead>('/head');
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
    const id = setInterval(load, pollMs);
    return () => { mounted = false; clearInterval(id); };
  }, [pollMs]);

  return { data, loading };
}

export function useBootstrap(pollMs = 5000) {
  const [data, setData] = useState<ApiBootstrap | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiBootstrap>('/bootstrap');
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
    const id = setInterval(load, pollMs);
    return () => { mounted = false; clearInterval(id); };
  }, [pollMs]);

  return { data, loading };
}

export function useStateNode(pollMs = 5000) {
  const [data, setData] = useState<ApiState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiState>('/state');
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
    const id = setInterval(load, pollMs);
    return () => { mounted = false; clearInterval(id); };
  }, [pollMs]);

  return { data, loading };
}

export function useUtxos(address: string, pollMs = 10000) {
  const [data, setData] = useState<ApiUtxos | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!address) return;
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiUtxos>(`/utxos?address=${encodeURIComponent(address)}`);
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
    const id = setInterval(load, pollMs);
    return () => { mounted = false; clearInterval(id); };
  }, [address, pollMs]);

  return { data, loading };
}

export function useHistory(address: string, pollMs = 10000) {
  const [data, setData] = useState<ApiHistory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!address) return;
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiHistory>(`/history?address=${encodeURIComponent(address)}`);
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
    const id = setInterval(load, pollMs);
    return () => { mounted = false; clearInterval(id); };
  }, [address, pollMs]);

  return { data, loading };
}

export function useAddress(address: string, page = 1, perPage = 20) {
  const [data, setData] = useState<ApiAddress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!address) return;
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiAddress>(`/address/${encodeURIComponent(address)}?page=${page}&per_page=${perPage}`);
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
  }, [address, page, perPage]);

  return { data, loading, refetch: () => { setLoading(true); } };
}

export function useBlock(id: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    async function load() {
      const d = await fetchJson<any>(`/block/${encodeURIComponent(id)}`);
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
  }, [id]);

  return { data, loading };
}

export function useTx(id: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    async function load() {
      const d = await fetchJson<any>(`/tx/${encodeURIComponent(id)}`);
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
  }, [id]);

  return { data, loading };
}

export function useNft(id: string) {
  const [data, setData] = useState<ApiNft | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiNft>(`/nft/${encodeURIComponent(id)}`);
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
  }, [id]);

  return { data, loading };
}

export function useCollection(id: string) {
  const [data, setData] = useState<ApiCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiCollection>(`/collection/${encodeURIComponent(id)}`);
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
  }, [id]);

  return { data, loading };
}

export function useToken(id: string) {
  const [data, setData] = useState<ApiToken | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiToken>(`/token/${encodeURIComponent(id)}`);
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
  }, [id]);

  return { data, loading };
}

export function useDexTokens() {
  const [data, setData] = useState<ApiDexToken[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const d = await fetchJson<ApiDexToken[]>('/dex/tokens');
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
    const id = setInterval(load, 10000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  return { data, loading };
}

export function useFeeEstimate() {
  const [data, setData] = useState<FeeEstimate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      const d = await fetchJson<FeeEstimate>('/fee_estimate');
      if (mounted) { setData(d); setLoading(false); }
    }
    load();
    const id = setInterval(load, 30000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  return { data, loading };
}

export type WsState = 'connecting' | 'connected' | 'reconnecting' | 'disconnected';

export function useWebSocket(onMessage: (msg: WsMsg) => void) {
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<number>();
  const pingIntervalRef = useRef<number>();
  const [state, setState] = useState<WsState>('connecting');

  useEffect(() => {
    let mounted = true;

    /** Guard every state update so nothing lands after unmount. */
    function setWsState(next: WsState) {
      if (mounted) setState(next);
    }

    function clearPing() {
      if (pingIntervalRef.current) {
        clearInterval(pingIntervalRef.current);
        pingIntervalRef.current = undefined;
      }
    }

    function connect() {
      if (!mounted) return;
      setWsState('connecting');
      const ws = new WebSocket(WS_URL);
      wsRef.current = ws;

      ws.onopen = () => {
        if (!mounted) return;
        console.log('[WS] Connected');
        setWsState('connected');
        clearPing();
        pingIntervalRef.current = window.setInterval(() => {
          if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: 'ping' }));
        }, 30000);
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data) as WsMsg;
          onMessage(msg);
        } catch (e) {
          console.error('[WS] Parse error', e);
        }
      };

      ws.onerror = (err) => {
        console.error('[WS] Error', err);
      };

      ws.onclose = () => {
        clearPing();
        if (!mounted) return;
        console.log('[WS] Disconnected, reconnecting in 5s...');
        setWsState('reconnecting');
        reconnectTimeoutRef.current = window.setTimeout(connect, 5000);
      };
    }

    connect();
    return () => {
      mounted = false;
      clearPing();
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      wsRef.current?.close();
      setState('disconnected');
    };
  }, [onMessage]);

  const send = useCallback((msg: object) => {
    wsRef.current?.send(JSON.stringify(msg));
  }, []);

  return { send, state };
}

export async function postApi<T>(path: string, body: object): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export function fmtKvnc(atoms: number): string {
  const kvnc = atoms / 100_000_000;
  if (kvnc >= 1e9) return (kvnc / 1e9).toFixed(2) + 'B KVNC';
  if (kvnc >= 1e6) return (kvnc / 1e6).toFixed(2) + 'M KVNC';
  if (kvnc >= 1e3) return (kvnc / 1e3).toFixed(2) + 'K KVNC';
  return kvnc.toFixed(8) + ' KVNC';
}

export function fmtAtoms(atoms: number): string {
  return atoms.toLocaleString() + ' atoms';
}

export function fmtNumber(n: number): string {
  return n.toLocaleString();
}

export function fmtPercent(n: number): string {
  return (n * 100).toFixed(2) + '%';
}