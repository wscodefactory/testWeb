import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";
import { companyProfile } from "../constants/company";
import { navigationItems } from "../constants/navigation";
import type { Page } from "../types/page";

interface HeaderProps {
  current: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ current, onNavigate }: HeaderProps) {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkModeEnabled);
  }, [darkModeEnabled]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <button type="button" onClick={() => onNavigate("home")} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-white">S</div>
          <div className="flex flex-col items-start">
            <span className="text-sm text-muted-foreground">{companyProfile.englishName.toUpperCase()}</span>
            <span className="font-semibold">{companyProfile.koreanName}</span>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navigationItems.map((item) => (
            <Button
              key={item.key}
              variant={current === item.key ? "secondary" : "ghost"}
              onClick={() => onNavigate(item.key)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setDarkModeEnabled((prev) => !prev)}>
            {darkModeEnabled ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button onClick={() => onNavigate("contact")}>Contact</Button>
        </div>
      </div>
    </header>
  );
}
