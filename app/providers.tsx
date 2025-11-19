"use client"

import { ThemeProvider } from "./context/ThemeContext";
import Header from "./header/page";
import Footer from "./footer/page";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}