import './globals.css'
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-slate-100 font-sans transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}