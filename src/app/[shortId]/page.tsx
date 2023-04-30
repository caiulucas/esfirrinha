'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';

const userSchema = z.object({
  username: z.string().min(1)
});

type UserData = z.infer<typeof userSchema>;

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<UserData>({
    resolver: zodResolver(userSchema)
  });

  const { shortId } = useParams();
  const router = useRouter();

  const onSubmit = useCallback(
    async (data: UserData) => {
      const res = await fetch('/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: data.username })
      });

      const { userId } = await res.json();

      sessionStorage.setItem('@esfirrinha:userId', userId);
      router.push(`/${shortId}/order`);
    },
    [router, shortId]
  );

  return (
    <main className="flex flex-col items-center justify-center gap-36">
      <div>
        <h1 className="text-3xl text-center font-medium">Esfirrinha??</h1>
        <p>Código do pedido: {shortId}</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Controller
          name="username"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              label="Nome:"
              placeholder="Digite seu nome ou apelido"
              onChange={onChange}
            />
          )}
        />
        <Button title="Fazer pedido" type="submit" />
        <Link href={`/${shortId}/final-order`}>
          <Button
            title="Ver pedido geral"
            variant="secondary"
            disabled={isSubmitting}
          />
        </Link>
      </form>
    </main>
  );
}
