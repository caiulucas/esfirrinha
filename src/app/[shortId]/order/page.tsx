'use client';
import { useParams, useRouter } from 'next/navigation';
import { use, useCallback } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/Button';
import { RadioButton } from '@/components/RadioButton';
import { Separator } from '@/components/Separator';
import { formatCurrency } from '@/utils/currency';
import { zodResolver } from '@hookform/resolvers/zod';
import { Category as PrismaCategory, Product } from '@prisma/client';

import { Item } from './components/Item';

interface Category extends PrismaCategory {
  products: Product[];
}

async function getCategories(): Promise<Category[]> {
  const res = await fetch('/api/categories');

  const data = await res.json();
  return data;
}

const categoriesPromise = getCategories();

const orderSchema = z.object({
  categories: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        products: z
          .array(
            z.object({
              id: z.string(),
              name: z.string(),
              cents: z.number().int().positive(),
              quantity: z.number().int()
            })
          )
          .transform((value) => value.filter((product) => product.quantity > 0))
      })
    )
    .transform((value) =>
      value.filter((category) => category.products.length > 0)
    )
    .refine((value) => value.length > 0, {
      message: 'Selecione ao menos um produto'
    })
});

type OrderData = z.infer<typeof orderSchema>;

export default function Order() {
  const categories = use(categoriesPromise);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<OrderData>({
    defaultValues: {
      categories: categories?.map((category) => ({
        ...category,
        products: category.products.map((product) => ({
          ...product,
          quantity: 0
        }))
      }))
    },
    resolver: zodResolver(orderSchema)
  });

  const categoriesWatch = watch('categories');

  const total = categoriesWatch.reduce((acc, category) => {
    const categoryTotal = category.products.reduce(
      (acc, product) => acc + product.cents * product.quantity,
      0
    );

    return acc + categoryTotal;
  }, 0);

  const formattedTotal = formatCurrency(total / 100).split('\u00A0');

  const router = useRouter();
  const { shortId } = useParams();

  const { fields } = useFieldArray({ control, name: 'categories' });

  const onSubmit = useCallback(
    async (data: OrderData) => {
      const userId = sessionStorage.getItem('@esfirrinha:userId');

      try {
        await fetch('/api/orders', {
          method: 'POST',
          body: JSON.stringify({ userId, shortId, categories: data.categories })
        });
        router.push(`/${shortId}/final-order`);
      } catch (err) {
        alert('Erro ao fazer pedido');
      }
    },
    [router, shortId]
  );

  return (
    <main className="flex flex-col gap-6 w-96">
      <h1 className="text-3xl font-medium text-left">Faça seu pedido</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        {fields.map((field, index) => (
          <section key={field.id} className="flex flex-col gap-6">
            <h2 className="text-xl font-medium">{field.name}</h2>
            <ul className="flex flex-col gap-2">
              {field.products.map((product, productIndex) => (
                <li key={product.id}>
                  <Controller
                    control={control}
                    name={`categories.${index}.products.${productIndex}.quantity`}
                    render={({ field: { onChange } }) => (
                      <Item
                        name={product.name}
                        price={product.cents / 100}
                        onChange={onChange}
                      />
                    )}
                  />
                </li>
              ))}
            </ul>
            <Separator />
          </section>
        ))}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Dividir refri?</h2>
          <div className="flex gap-6">
            <RadioButton label="Sim" name="split" />
            <RadioButton label="Não" name="split" />
          </div>
        </section>
        <Separator />

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-lg">
            <strong>Total</strong>
            <span>
              <strong className="text-yellow-500">{formattedTotal[0]}</strong>{' '}
              {formattedTotal[1]}
            </span>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <Button type="submit" title="Finalizar pedido" />
            {errors.categories && (
              <span className="text-red-400">{errors.categories?.message}</span>
            )}
          </div>
        </section>
      </form>
    </main>
  );
}
