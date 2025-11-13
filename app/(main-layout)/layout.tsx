import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
