import { AnimalBreed } from "@/types";
import { Badge } from "../badge";
import { Origin } from "./origin";
import { ReadMore } from "./read-more";
import { Temperaments } from "./temperaments";

type Props = {
  breeds: AnimalBreed[];
};
export const AnimalInfo = ({ breeds }: Props) => {
  return (
    <section>
      {breeds.map((breed) => (
        <div className="space-y-3" key={breed.id}>
          <h1 className="text-3xl font-bold">{breed.name}</h1>

          <Temperaments temperament={breed.temperament} />
          <Origin origin={breed.origin} country_code={breed.country_code} />

          <div className="flex items-center gap-x-2">
            <h3 className="text-lg font-semibold">Lifespan:</h3>
            <p className="font-medium text-lg">{breed.life_span}years</p>
          </div>

          <div className="flex items-center gap-x-2">
            <h3 className="text-lg font-semibold">Weight:</h3>
            <Badge className="rounded-md bg-stone-800">
              {breed.weight?.imperial} lb
            </Badge>
            <Badge className="rounded-md bg-stone-800">
              {breed.weight?.metric} kg
            </Badge>
          </div>

          <ReadMore wikipedia_url={breed.wikipedia_url} />
        </div>
      ))}
    </section>
  );
};
