import type { Metadata } from "next";
import ReactDOM  from "react-dom";
import localFont from "next/font/local";
import "./globals.css";

const worksans = localFont(
  {
    src: './fonts/WorkSans-VariableFont_wght.ttf',
    display: 'swap',
    variable: '--font-work-sans',
  }
);

export const metadata: Metadata = {
  title: "FAQ accordion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  ReactDOM.preload('/images/background-pattern-mobile.svg', {as: 'image'});
  ReactDOM.preload('/images/background-pattern-desktop.svg', {as: 'image'});

  return (
    <html lang="en" className="h-full">
      <body className={`${worksans.className} min-h-screen`}>{children}</body>
    </html>
  );
}
