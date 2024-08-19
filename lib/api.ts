import { TheCatAPI } from "@thatapicompany/thecatapi";

/*
  Reduce initialization of new TheCatAPI, when working in dev mode. Instead it would take it from cache if possible.
*/
declare global {
  var theCatAPI: TheCatAPI | undefined;
  var theDogAPI: TheCatAPI | undefined;
}

export const theDogAPI =
  globalThis.theDogAPI ||
  new TheCatAPI(process.env.DOG_API_KEY!, {
    host: "https://api.thedogapi.com/v1",
  });

export const theCatAPI =
  globalThis.theCatAPI ||
  new TheCatAPI(process.env.CAT_API_KEY!, {
    host: "https://api.thecatapi.com/v1",
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.theCatAPI = theCatAPI;
  globalThis.theDogAPI = theDogAPI;
}
