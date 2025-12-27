import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={jetbrainsMono.variable}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
