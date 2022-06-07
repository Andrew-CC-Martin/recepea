import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const carrot = await prisma.ingredient.upsert({
    where: { name: "carrot" },
    update: {},
    create: {
      name: "carrot",
      description: "those orange guys that all the girls love",
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      kosher: true,
      dairyFree: true,
      nutsFree: true,
      treeNutFree: true,
      sugarFree: true,
      keto: false,
      imgUrl:
        "https://static.onecms.io/wp-content/uploads/sites/37/2020/04/30/carrots-106dce5c.jpg",
      measureQuantity: {
        create: {
          name: "grams",
          abbreviation: "g",
        },
      },
    },
  });

  console.log({ carrot });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
