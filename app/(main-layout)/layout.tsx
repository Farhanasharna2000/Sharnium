import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
