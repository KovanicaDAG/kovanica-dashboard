import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Content } from './Content';

interface LayoutProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function Layout({ children, sidebarOpen, onSidebarToggle }: LayoutProps) {
  return (
    <div className="flex h-screen bg-bg overflow-hidden">
      <Sidebar
        open={sidebarOpen}
        onToggle={onSidebarToggle}
        panels={[]}
        activePanel=""
        onPanelChange={() => {}}
        head={null}
        bootstrap={null}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuClick={onSidebarToggle}
          title=""
          subtitle=""
          network=""
          wsConnected={false}
          head={null}
          fmtKvnc={() => ''}
          lastBlock={null}
          txCount={0}
        />
        <Content>{children}</Content>
      </div>
    </div>
  );
}