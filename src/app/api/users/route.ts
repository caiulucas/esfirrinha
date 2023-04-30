import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const body: { username: string } = await request.json();

  if (!body.username) {
    return NextResponse.json(
      { error: 'No username provided' },
      { status: 400 }
    );
  }

  const user = await prisma.user.create({
    data: { name: body.username }
  });

  return NextResponse.json({ userId: user.id }, { status: 201 });
}
