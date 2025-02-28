import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets:["latin"],
  weight:["200","400","500","800"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Password Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
