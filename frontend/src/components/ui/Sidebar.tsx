import { ChevronLeft, Home, GitBranch, Database, Activity, Users, Clock, Globe, Shield, Coins, ArrowRightLeft, UsersRound, Droplet, Pickaxe, Terminal, BarChart2, Settings } from 'lucide-react';
import type { ApiHead, ApiBootstrap } from '../../types';

export interface Panel {
  id: string;
  label: string;
  icon: string;
}

export interface PanelGroup {
  label: string;
  panels: Panel[];
}

interface SidebarProps {
  panels: Panel[];
  groups?: PanelGroup[];
  activePanel: string;
  onPanelChange: (id: string) => void;
  /** Rendered only inside the <lg drawer as the close affordance. */
  onClose?: () => void;
  /** Mobile drawer: drop the supplementary stats footer to save vertical space. */
  compact?: boolean;
  head: ApiHead | null;
  bootstrap: ApiBootstrap | null;
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
  swap: (props) => <ArrowRightLeft {...props} />,
  'arrow-right-left': (props) => <ArrowRightLeft {...props} />,
  'users-round': (props) => <UsersRound {...props} />,
  droplet: (props) => <Droplet {...props} />,
  pickaxe: (props) => <Pickaxe {...props} />,
  terminal: (props) => <Terminal {...props} />,
  'bar-chart-2': (props) => <BarChart2 {...props} />,
  settings: (props) => <Settings {...props} />,
};

function navSections(panels: Panel[], groups?: PanelGroup[]): PanelGroup[] {
  if (groups && groups.length > 0) return groups;
  return [{ label: '', panels }];
}

function NavButton({ panel, isActive, onSelect }: { panel: Panel; isActive: boolean; onSelect: (id: string) => void }) {
  const Icon = iconMap[panel.icon] || iconMap.home;
  return (
    <button
      type="button"
      onClick={() => onSelect(panel.id)}
      className={`nav-item ${isActive ? 'bg-accent/10 text-accent border-l-2 border-accent' : 'text-muted hover:text-fg hover:bg-surface-2'}`}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon size={16} />
      <span className="truncate">{panel.label}</span>
    </button>
  );
}

export function Sidebar({ panels, groups, activePanel, onPanelChange, onClose, compact = false, head, bootstrap }: SidebarProps) {
  const sections = navSections(panels, groups);

  return (
    <aside className="w-full h-full bg-surface border-r border-border flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between gap-2">
        <h2 className="font-display text-lg font-medium text-fg truncate">Navigation</h2>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary p-2 min-h-[44px] min-w-[44px] shrink-0"
            aria-label="Close navigation"
          >
            <ChevronLeft size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-2 space-y-4 scrollbar-thin" aria-label="Dashboard panels">
        {sections.map((section) => (
          <div key={section.label || 'panels'} className="space-y-1">
            {section.label && (
              <h3 className="px-3 pt-2 text-[11px] font-semibold uppercase tracking-wider text-subtle">{section.label}</h3>
            )}
            {section.panels.map((panel) => (
              <NavButton
                key={panel.id}
                panel={panel}
                isActive={activePanel === panel.id}
                onSelect={onPanelChange}
              />
            ))}
          </div>
        ))}
      </nav>

      {!compact && (
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
      )}
    </aside>
  );
}
