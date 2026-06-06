import { prisma } from "../lib/prisma";

export async function getColleges(filters: any) {
  const {
    search,
    location,
    minFees,
    maxFees,
    rating,
    page,
    limit,
  } = filters;
  

  const where: any = {};

  if (search) {
    where.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  if (location) {
    where.location = {
      contains: location,
      mode: "insensitive",
    };
  }

  if (rating) {
    where.rating = {
      gte: rating,
    };
  }

  if (minFees || maxFees) {
    where.fees = {};

    if (minFees) where.fees.gte = minFees;
    if (maxFees) where.fees.lte = maxFees;
  }

  const skip = (page - 1) * limit;

  const [colleges, total] = await Promise.all([
    prisma.college.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        rating: "desc",
      },
    }),

    prisma.college.count({ where }),
  ]);

  return {
    colleges,
    total,
  };
  
}
export async function getCollegeById(id: string) {
  return prisma.college.findUnique({
    where: {
      id,
    },
    include: {
      courses: true,
      reviews: true,
      cutoffs: true,
    },
  });
}