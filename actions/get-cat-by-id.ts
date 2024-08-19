"use server";

import { theCatAPI } from "@/lib/api";

export const getCatById = async (id: string) => {
  try {
    const image = await theCatAPI.images.getImage(id);
    return { image };
  } catch (error) {
    // if (error instanceof ApiResponseError) {
    //   // handle response error
    // }
    // if (error instanceof ApiRequestError) {
    //   // handle network error
    // }
    // // handle unknown error
    // throw error;
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
