import { ReactNode } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import type { Page } from "../types/page";

interface MainLayoutProps {
  current: Page;
  onNavigate: (page: Page) => void;
  children: ReactNode;
}

export function MainLayout({ current, onNavigate, children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header current={current} onNavigate={onNavigate} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
