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
          className="md:container flex items-center justify-center overflow-auto
          h-full md:h-fit p-4 md:p-20 md:w-fit md:rounded-4xl bg-gray-800"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
