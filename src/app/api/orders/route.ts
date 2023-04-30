import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

interface Category {
  id: string;
  products: [
    {
      id: string;
      quantity: number;
      cents: number;
    }
  ];
}

export async function POST(request: Request) {
  const body: { userId: string; shortId: string; categories: Category[] } =
    await request.json();

  if (!body.shortId) {
    return NextResponse.json({ error: 'No shortId provided' }, { status: 400 });
  }

  if (!body.userId) {
    return NextResponse.json({ error: 'No userId provided' }, { status: 400 });
  }

  const allProducts = body.categories.flatMap((category) =>
    category.products.map((product) => ({
      product_id: product.id,
      quantity: product.quantity,
      total: product.quantity * product.cents
    }))
  );

  const total = allProducts.reduce((acc, curr) => acc + curr.total, 0);

  const order = await prisma.order.create({
    data: {
      total,
      group: {
        connect: {
          shortId: body.shortId
        }
      },
      user: {
        connect: {
          id: body.userId
        }
      },
      products: {
        create: allProducts
      }
    }
  });

  return NextResponse.json({ order }, { status: 201 });
}
