import './globals.css';
import { Caveat, Crimson_Pro } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${caveat.variable} ${crimson.variable}`}>
      <body className="font-[var(--font-crimson)] antialiased">
        {children}
      </body>
    </html>
  );
}
