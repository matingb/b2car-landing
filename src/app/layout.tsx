import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${openSans.variable} bg-bg-main text-primary antialiased selection:bg-accent/20 selection:text-accent`}
      >
        {children}
      </body>
    </html>
  );
}
