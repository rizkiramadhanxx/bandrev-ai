import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
