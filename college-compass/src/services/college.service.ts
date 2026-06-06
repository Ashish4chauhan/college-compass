import {
  getColleges,
  getCollegeById,
} from "../repositories/college.repository";

export async function searchColleges(filters: any) {
  return getColleges(filters);
}

export async function fetchCollegeById(id: string) {
  return getCollegeById(id);
}