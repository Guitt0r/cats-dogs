"use server";

import { theDogAPI } from "@/lib/api";
import { Breed } from "@thatapicompany/thecatapi";

export const getDogs = async (options?: {
  page?: number;
  breedId?: string | null;
}) => {
  try {
    const images = await theDogAPI.images.searchImages({
      limit: 15,
      page: options?.page,
      mimeTypes: ["png", "jpg"],
      hasBreeds: true,
      breeds: [options?.breedId] as Breed[],
    });
    return { images };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
