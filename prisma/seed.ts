import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  // categories
  const sfihas = await prisma.category.upsert({
    where: { name: 'Esfirras' },
    update: {},
    create: {
      name: 'Esfirras',
      products: {
        create: [
          {
            name: 'Carne',
            cents: 180
          },
          {
            name: 'Frango',
            cents: 180
          },
          {
            name: 'Queijo',
            cents: 180
          },
          {
            name: 'Napolitana',
            cents: 180
          },
          {
            name: 'Marguerita',
            cents: 180
          },
          {
            name: 'Calabresa',
            cents: 180
          },
          {
            name: 'Portuguesa',
            cents: 180
          }
        ]
      }
    }
  });

  const sandwiches = await prisma.category.upsert({
    where: { name: 'Sanduíches' },
    update: {},
    create: {
      name: 'Sanduíches',
      products: {
        create: [
          {
            name: 'Hambúrguer',
            cents: 700
          },
          {
            name: 'X Egg',
            cents: 800
          },
          {
            name: 'X Bacon',
            cents: 900
          },
          {
            name: 'X Egg Bacon',
            cents: 1000
          },
          {
            name: 'X Frango',
            cents: 1000
          },
          {
            name: 'X Lançador',
            cents: 1000
          },
          {
            name: 'Mata Fome',
            cents: 1300
          },
          {
            name: 'Vegetariano',
            cents: 700
          },
          {
            name: 'Monstruoso',
            cents: 1700
          }
        ]
      }
    }
  });

  console.log({ sfihas, sandwiches });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
