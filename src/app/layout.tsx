import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/component/header";
import { Footer } from "@/components/component/footer";
import { cookies } from 'next/headers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sportif-AI",
  description: "Your personal AI-powered fitness assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const athleteCookie = cookieStore.get('athlete');
  const athlete = athleteCookie ? JSON.parse(athleteCookie.value) : null;

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex min-h-screen flex-col">
        <Header athlete={athlete} />
        <main className="flex-1 bg-[#00000] py-8">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
        <Footer />
      </div>
      </body>
    </html>
  );
}
