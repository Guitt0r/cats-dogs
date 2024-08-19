import { getCats } from "@/actions/get-cats";
import { getDogs } from "@/actions/get-dogs";
import { useInfiniteQuery } from "@tanstack/react-query";

/*
 There is no limitation by pages, so I limited by 20, it could be changed.
 Also, when filtering by breed, response could give you same images many times due to lack of qty of images that matches chosen breed.
 The page could be any number and still would be giving a response, so consider it's a feature of API and so on feature of my app. 
 */
export const useGetAnimals = (animal: string, breedId?: string | null) => {
  return useInfiniteQuery({
    enabled: !!animal,
    queryKey: ["animal", { animal }, { breedId }],
    queryFn: async ({ pageParam }) => {
      const animalFunctions = { cats: getCats, dogs: getDogs };
      const fetchAnimalFunction =
        animalFunctions[animal as keyof typeof animalFunctions];
      const res = await fetchAnimalFunction({ page: pageParam, breedId });
      if (res.error) {
        if (res.error) {
          //TODO: notify user that error happens;
          return;
        }
      }
      return res.images;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage || !lastPage.length) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    maxPages: 20,
  });
};
