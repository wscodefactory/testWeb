import { useMemo, useState } from "react";

import { MainLayout } from "./layout/MainLayout";
import { AboutPage } from "./components/pages/AboutPage";
import { BusinessPage } from "./components/pages/BusinessPage";
import { ContactPage } from "./components/pages/ContactPage";
import { HomePage } from "./components/pages/HomePage";
import { NoticePage } from "./components/pages/NoticePage";
import { Toaster } from "./components/ui/sonner";
import type { Page } from "./types/page";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const pageComponent = useMemo(() => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "business":
        return <BusinessPage />;
      case "notice":
        return <NoticePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <MainLayout current={currentPage} onNavigate={handleNavigate}>
        {pageComponent}
      </MainLayout>
      <Toaster />
    </>
  );
}
