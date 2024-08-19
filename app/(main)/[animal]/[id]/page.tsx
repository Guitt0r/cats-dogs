"use client";

import { useGetAnimalById } from "@/hooks/use-get-animal-by-id";
import { imageLoader } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AnimalInfo } from "@/components/animal-page/animal-info";
import { AnimalBreed } from "@/types";
import { BackButton } from "@/components/back-button";

const AnimalPage = () => {
  const params = useParams<{ animal: string; id: string }>();
  const { id, animal } = params;
  const getAnimalByIdQuery = useGetAnimalById(id, animal);
  const { data, isLoading } = getAnimalByIdQuery;

  if (!data) {
    if (!isLoading) return <>Not found</>;
    else
      return (
        <div className="absolute inset-0 flex justify-center items-center">
          <Loader2 className="size-24 animate-spin" />
        </div>
      );
  }

  return (
    <>
      <BackButton className="mb-4" label={`Go to list of ${animal}`} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <section className="rounded-md shadow-md overflow-hidden">
          <Image
            loader={imageLoader}
            priority
            className="w-full h-auto max-h-[550px] object-contain"
            src={data.url}
            width={data.width || 250}
            height={data.height || 250}
            alt=""
          />
        </section>
        <AnimalInfo breeds={data.breeds as AnimalBreed[]} />
      </div>
    </>
  );
};

export default AnimalPage;
