import Header from '../components/Header';
import { AiFlagProvider } from './context/AiFlagContext';
import { ApiUrlProvider } from './context/ApiUrlContext';
import './globals.css';

export const metadata = {
  title: 'Webhound',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AiFlagProvider>
          <ApiUrlProvider>
            <Header />
            {children}
          </ApiUrlProvider>
        </AiFlagProvider>
      </body>
    </html>
  );
}
