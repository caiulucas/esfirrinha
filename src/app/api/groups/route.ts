import { customAlphabet, urlAlphabet } from 'nanoid';
import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

const nanoid = customAlphabet(urlAlphabet, 6);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const shortId = searchParams.get('shortId');

  const group = await prisma.group.findUnique({
    where: { shortId: shortId as string },
    include: {
      orders: {
        include: {
          user: true,
          products: {
            include: {
              product: {
                include: { category: true }
              }
            }
          }
        }
      }
    }
  });

  if (!group) {
    return NextResponse.json({ error: 'Group not found' }, { status: 404 });
  }

  return NextResponse.json(group);
}

export async function POST(request: Request) {
  const body: { username: string } = await request.json();

  const group = await prisma.group.create({
    data: {
      total: 0,
      shortId: nanoid(6)
    }
  });

  const user = await prisma.user.create({
    data: {
      name: body.username
    }
  });

  return NextResponse.json(
    { shortId: group.shortId, userId: user.id },
    { status: 201 }
  );
}

// export async function PUT(request: Request) {
//   await prisma.group.update({});
// }
