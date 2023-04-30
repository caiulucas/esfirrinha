'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Anchor } from '@/components/Anchor';
import { Button } from '@/components/Button';

export default function Share() {
  const { shortId } = useParams();
  const baseUrl = window.location.origin;

  const shareUrl = new URL('https://wa.me');
  shareUrl.searchParams.set(
    'text',
    `Faça um pedido coletivo no Esfirrinha usando o link: ${baseUrl}/${shortId}`
  );

  return (
    <main className="flex flex-col items-center justify-center gap-36">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-medium text-left">Compartilhar</h1>
        <p className="text-lg">
          Esse é o código do pedido. <br />
          Compartilhe com os outros que vão pedir também.
        </p>
      </div>

      <form className="flex flex-col gap-6 w-full">
        <p className="text-center text-xl font-medium">
          {`${baseUrl}/${shortId}`}
        </p>

        <Anchor
          target="_blank"
          href={shareUrl.toString()}
          title="Compartilhar"
        />
        <Link href={`/${shortId}/order`}>
          <Button title="Fazer pedido" variant="secondary" />
        </Link>
      </form>
    </main>
  );
}
