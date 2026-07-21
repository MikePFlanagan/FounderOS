import type { ReactNode } from 'react';
import './styles.css';
export const metadata = { title: 'FounderOS', description: 'AI company operating system' };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
