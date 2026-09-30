import { ChevronRight, ChevronLeft, Home, GitBranch, Database, Activity, Users, Clock, Globe, Shield, Coins, ArrowRightLeft, UsersRound, Droplet, Pickaxe, Terminal, BarChart2, Settings } from 'lucide-react';

interface Panel {
  id: string;
  label: string;
  icon: string;
}

interface SidebarProps {
  open: boolean;
  panels: Panel[];
  activePanel: string;
  onPanelChange: (id: string) => void;
  onToggle: () => void;
  head: any;
  bootstrap: any;
}

const iconMap: Record<string, (props: { size?: number }) => React.ReactElement> = {
  home: (props) => <Home {...props} />,
  'git-branch': (props) => <GitBranch {...props} />,
  database: (props) => <Database {...props} />,
  activity: (props) => <Activity {...props} />,
  users: (props) => <Users {...props} />,
  clock: (props) => <Clock {...props} />,
  globe: (props) => <Globe {...props} />,
  shield: (props) => <Shield {...props} />,
  coins: (props) => <Coins {...props} />,
  'arrow-right-left': (props) => <ArrowRightLeft {...props} />,
  'users-round': (props) => <UsersRound {...props} />,
  droplet: (props) => <Droplet {...props} />,
  pickaxe: (props) => <Pickaxe {...props} />,
  terminal: (props) => <Terminal {...props} />,
  'bar-chart-2': (props) => <BarChart2 {...props} />,
  settings: (props) => <Settings {...props} />,
};

export function Sidebar({ open, panels, activePanel, onPanelChange, onToggle, head, bootstrap }: SidebarProps) {
  if (!open) {
    return (
      <button
        onClick={onToggle}
        className="fixed left-2 top-16 z-50 btn-secondary p-2 lg:hidden"
        aria-label="Open sidebar"
      >
        <ChevronRight size={20} />
      </button>
    );
  }

  return (
    <aside className="w-64 bg-surface border-r border-border flex flex-col lg:static">
      <div className="p-4 border-b border-border">
        <button onClick={onToggle} className="btn-secondary p-2 ml-auto lg:hidden" aria-label="Close sidebar">
          <ChevronLeft size={20} />
        </button>
        <h2 className="font-display text-lg font-medium text-fg">Navigation</h2>
      </div>

      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {panels.map((panel) => {
          const Icon = iconMap[panel.icon] || iconMap.home;
          const isActive = activePanel === panel.id;
          return (
            <button
              key={panel.id}
              onClick={() => onPanelChange(panel.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-accent/10 text-accent border-l-2 border-accent'
                  : 'text-muted hover:text-fg hover:bg-surface-2'
              }`}
            >
              <Icon size={16} />
              <span>{panel.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border space-y-3">
        {head && bootstrap && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted">Supply</span>
              <span className="font-mono text-fg">
                {(bootstrap.native_circulating || 0) / 1e8 > 1e6
                  ? ((bootstrap.native_circulating || 0) / 1e14).toFixed(2) + 'M'
                  : ((bootstrap.native_circulating || 0) / 1e8).toFixed(0)
                } KVNC
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Height</span>
              <span className="font-mono text-fg">{head.blocks?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Blue Score</span>
              <span className="font-mono text-fg">{head.blue_score?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Peers</span>
              <span className="font-mono text-fg">{bootstrap.peers?.length || 0}</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}