"use server";

import { theDogAPI } from "@/lib/api";

export const getDogById = async (id: string) => {
  try {
    const image = await theDogAPI.images.getImage(id);
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
