import { customAlphabet, urlAlphabet } from 'nanoid';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

const nanoid = customAlphabet(urlAlphabet, 6);

export async function POST() {
  const group = await prisma.group.create({
    data: {
      total: 0,
      shortId: nanoid(6)
    }
  });

  return NextResponse.json(group.shortId, { status: 201 });
}
