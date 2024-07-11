import React from "react";

import { Header } from "@/components/header";
import { ModeToggle } from "@/components/toggle-theme";
import { Footer } from "../footer";

interface MainLayoutProps {
    children: React.ReactNode;
    }

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background bg-blue-50 font-sans antialiased flex flex-col">
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
}