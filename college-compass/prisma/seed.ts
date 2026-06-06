import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "Amity University",
        location: "Noida",
        fees: 180000,
        rating: 4.3,
        overview: "Private University",
        averagePackage: 650000,
        highestPackage: 2200000,
      },
      {
        name: "Chandigarh University",
        location: "Punjab",
        fees: 160000,
        rating: 4.4,
        overview: "Private University",
        averagePackage: 700000,
        highestPackage: 2500000,
      },
      {
        name: "Lovely Professional University",
        location: "Punjab",
        fees: 170000,
        rating: 4.2,
        overview: "Leading private university",
        averagePackage: 620000,
        highestPackage: 3000000,
      }
    ],
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });