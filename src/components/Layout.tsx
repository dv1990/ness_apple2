import { ReactNode } from "react";
import NavigationEnhanced from "./NavigationEnhanced";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationEnhanced />
      <main className={`flex-1 pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;