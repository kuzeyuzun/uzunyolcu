import './globals.css';

export const metadata = {
  title: 'UzunYolcu',
  description: 'Modern Yazılım ve Dijital İçerik Platformu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}