import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Bahamut | We build AI native software, agents and workflows",
  description:
    "Bahamut is a software company that builds AI native software, agents and workflows",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Bahamut | We build AI native software, agents and workflows",
    description:
      "Bahamut is a software company that builds AI native software, agents and workflows",
    images: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
