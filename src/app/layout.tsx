import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const NunitoFont = Poppins({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Brandrev AI",
  description: "Brandrev AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NunitoFont.variable} font-nunito antialiased`}>
        {children}
      </body>
    </html>
  );
}
