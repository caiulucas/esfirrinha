'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';

const groupSchema = z.object({
  username: z.string().min(1)
});

type GroupData = z.infer<typeof groupSchema>;

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { isLoading }
  } = useForm<GroupData>({
    resolver: zodResolver(groupSchema)
  });

  const router = useRouter();

  const onSubmit = useCallback(
    async (data: GroupData) => {
      const response = await fetch('/api/groups', {
        body: JSON.stringify(data),
        method: 'POST'
      });

      const { shortId, userId } = await response.json();
      sessionStorage.setItem('@esfirrinha:userId', userId);
      router.push(`/${shortId}/share`);
    },
    [router]
  );

  return (
    <main className="flex flex-col items-center justify-center gap-36">
      <h1 className="text-3xl font-medium">Esfirrinha??</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange } }) => (
            <Input
              label="Nome:"
              placeholder="Digite seu nome ou apelido"
              onChange={onChange}
            />
          )}
        />

        <Button title="Inciar pedido" type="submit" disabled={isLoading} />
      </form>
    </main>
  );
}
