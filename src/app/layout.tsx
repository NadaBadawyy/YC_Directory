import type { Metadata } from "next";
import "./globals.css";
import 'easymde/dist/easymde.min.css';
import { Toaster } from "@/components/ui/sonner";
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
        <Toaster/>
      </body>
    </html>
  );
}
