import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "../../public/porfolio-icon.jpeg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditi's Portfolio",
  description: "This is portfolio website of Aditi, where you can find her projects, blogs and resume.",
  icons:{
    icon: "../../public/porfolio-icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
          >
            <div>
              <Navbar />
            </div>
            {children}
            <div>
              <Footer />
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
