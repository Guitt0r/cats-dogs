export type AnimalBreed = {
  id: string;
  name: string;
  temperament?: string;
  origin?: string;
  country_code?: string;
  life_span?: string;
  wikipedia_url?: string;
  weight?: { [key: string]: string };
};

export type BreedListItem = {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: "string";
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
};
