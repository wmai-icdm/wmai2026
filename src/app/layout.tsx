import type { Metadata } from "next";
import { K2D, Readex_Pro } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Khởi tạo font academic: K2D (sans-serif) và Readex Pro (serif)
const k2d = K2D({
  variable: "--font-k2d",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AMI 2026 | The 1st Workshop on Autonomous Machine Intelligence",
  description: "IEEE ICDM 2026 Workshop on Autonomous Machine Intelligence (AMI 2026). November 12-15, 2026, Shenyang, China.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${k2d.variable} ${readexPro.variable} scroll-smooth h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        {children}
        
        {/* Footer đơn giản */}
        <footer className="mt-auto py-6 bg-gray-900 text-white text-center text-xs border-t border-gray-800">
          <p>© 2026 AMI Workshop Organizers. All rights reserved.</p>
          <p className="text-gray-500 mt-1">In conjunction with IEEE ICDM 2026 • Shenyang, China</p>
        </footer>
      </body>
    </html>
  );
}
