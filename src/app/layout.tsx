import FooterComp from "@/components/FooterComp/FooterComp";
import DesktopNavs from "@/components/Navs/DesktopNavs";
import MobileNavs from "@/components/Navs/MobileNavs";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutPropsType = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {/* Navigation */}
        <header>
          <section className="hidden md:block">
            <DesktopNavs />
          </section>
          <section className="md:hidden">
            <MobileNavs />
          </section>
        </header>

        {/* Main Content (grows to fill space) */}
        <main>{children}</main>
        {/* Sticky Footer at bottom */}
        <footer className="">
          <FooterComp />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
