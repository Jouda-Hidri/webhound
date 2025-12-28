import Header from '../components/Header';
import { ApiUrlProvider } from './context/ApiUrlContext';
import './globals.css';

export const metadata = {
  title: 'Webhound',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApiUrlProvider>
          <Header />
          {children}
        </ApiUrlProvider>
      </body>
    </html>
  );
}
