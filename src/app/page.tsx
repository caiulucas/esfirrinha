'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';

const validationSchema = z.object({
  username: z.string().min(1)
});

type FormData = z.infer<typeof validationSchema>;

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { isLoading }
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema)
  });

  const router = useRouter();

  const onSubmit = useCallback(
    async (data: FormData) => {
      const response = await fetch('/api/groups', {
        body: JSON.stringify(data),
        method: 'POST'
      });

      const shortId = await response.json();
      router.push(`/${shortId}/share`);
    },
    [router]
  );

  return (
    <main className="flex flex-col items-center justify-between gap-36">
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
