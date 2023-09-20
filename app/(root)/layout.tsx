import Topnav from "@/components/Topnav";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Bottombar from "@/components/Bottombar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BME hub",
  description: "BME hub official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Topnav />
          <div className="flex">
            <Sidebar />
            <section className="bg-light-1 dark:bg-dark-3 ">{children}</section>
          </div>
          <Bottombar />
        </ThemeProvider>
      </body>
    </html>
  );
}
