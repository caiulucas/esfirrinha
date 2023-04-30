import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Esfirrinha',
  description: 'Crie pedidos em conjunto muito mais rápido'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div
          className="md:container flex md:items-start justify-center
          md:justify-normal overflow-y-auto p-4 md:p-20 md:w-fit md:rounded-4xl
          h-full md:h-fit md:max-h-192 bg-gray-800"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
