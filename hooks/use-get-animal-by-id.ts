import { getCatById } from "@/actions/get-cat-by-id";
import { getDogById } from "@/actions/get-dog-by-id";
import { useQuery } from "@tanstack/react-query";

export const useGetAnimalById = (id: string, animal: string) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["animal", { animal }, { id }],
    queryFn: async () => {
      const animalFunctions = { cats: getCatById, dogs: getDogById };
      const fetchAnimalFunction =
        animalFunctions[animal as keyof typeof animalFunctions];
      const res = await fetchAnimalFunction(id);
      if (res.error) {
        //TODO: notify user that error happens;
        return;
      }
      return res.image;
    },
  });
};
