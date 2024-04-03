import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from './_components/Common';
import { Nav } from './_components/Common';
import RecoilRootProvider from './recoilRootProvider';
import { createSupabaseServerComponentClient } from './_utils/supabase/server';

const inter = Inter({ subsets: ['latin'] });

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
        <RecoilRootProvider>
          <nav>
            <Nav />
          </nav>
          <section>{children}</section>
          <footer>
            <Footer text="© 2024 Memoire." />
          </footer>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
