import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B2Car",
  description: "Gestión inteligente para clientes, vehículos y reparaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={`${openSans.variable} bg-bg-main text-primary antialiased selection:bg-accent/20 selection:text-accent`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
