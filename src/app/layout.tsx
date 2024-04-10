import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from './_components/Common';
import { createSupabaseServerComponentClient } from './_utils/supabase/server';

const inter = Inter({ subsets: ['latin'] });

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'memoire',
  description: 'memoire app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, error } =
    await createSupabaseServerComponentClient().auth.getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Nav />
        </nav>
        {children}
        {/* <footer>
          <Footer text="© 2024 Memoire." />
        </footer> */}
      </body>
    </html>
  );
}
