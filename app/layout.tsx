import type { Metadata } from 'next';
import { CssBaseline } from '@mui/material';
import AppTheme from './theme/AppTheme';
import './globals.css';

export const metadata: Metadata = {
  title: 'CRM App',
  description: 'Customer Relationship Management Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <AppTheme>
          <CssBaseline />
          {children}
        </AppTheme>
      </body>
    </html>
  );
}
