"use server";

import { theCatAPI } from "@/lib/api";
import { Breed } from "@thatapicompany/thecatapi";

export const getCats = async (options?: {
  page?: number;
  breedId?: string | null;
}) => {
  try {
    const images = await theCatAPI.images.searchImages({
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
