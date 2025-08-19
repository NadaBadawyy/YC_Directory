import type { Metadata } from "next";
import "./globals.css";
import 'easymde/dist/easymde.min.css';
export const metadata: Metadata = {
  title: "YC Directory",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
      suppressHydrationWarning
        className={`font-work-sans`}
      >
        {children}
      </body>
    </html>
  );
}
