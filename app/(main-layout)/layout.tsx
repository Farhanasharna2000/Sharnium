import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ReactNode } from "react";
import Providers from "../providers";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Providers>{children}</Providers>
      <Footer />
    </main>
  );
};

export default MainLayout;
