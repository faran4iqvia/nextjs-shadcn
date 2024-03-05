import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';
import { cn } from '@/lib/utils';

const font = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'My Next 14 App',
 description: 'App Template',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: ReactNode;
}>) {
 return (
  <html lang='en' suppressHydrationWarning>
   <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
    <ThemeProvider
     attribute='class'
     defaultTheme='dark'
     enableSystem={false}
     storageKey='swag-app-theme'
     disableTransitionOnChange
    >
     {children}
    </ThemeProvider>
   </body>
  </html>
 );
}
