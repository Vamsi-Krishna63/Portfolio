import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";
import Background3D from "@/components/Background3D";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vamsi Krishna Koppala - Software Engineer",
  description: "Software Engineer specializing in cloud computing, DevOps, and AI-driven applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-transparent text-gray-900 dark:text-white relative`}>
        <Background3D />
        <div className="relative z-10">
          {children}
        </div>
        <Chatbot />
        <Analytics />
      </body>
    </html>
  );
}