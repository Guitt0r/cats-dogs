"use client";

import { PhotoList } from "@/components/card-list";
import { SearchInput } from "@/components/search-input";
import { useGetAnimals } from "@/hooks/use-get-animals";
import { Loader2, RefreshCw } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const params = useParams<{ animal: string }>();
  const { animal } = params;
  const searchParams = useSearchParams();
  const breedId = searchParams.get("breed_id");

  const getAnimalsQuery = useGetAnimals(animal, breedId);
  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    getAnimalsQuery;
  const { ref } = useInView({
    rootMargin: "10px",
    onChange: (inView) => {
      inView && fetchNextPage();
    },
  });
  if (isLoading)
    return (
      <div className="absolute inset-0 flex justify-center items-center">
        <Loader2 className="size-24 animate-spin" />
      </div>
    );

  if (!!searchParams.size && !data?.pages[0]?.length) {
    return (
      <div className="text-center py-10 space-y-2">
        <h1 className="text-2xl font-medium">
          There are no {animal} with chosen breed :(
        </h1>
        <p className="text-lg italic">Try to choose different breed</p>
      </div>
    );
  }
  return (
    <>
      <div className="mb-4 w-max mx-auto">
        <SearchInput defaultValue={breedId} />
      </div>
      <PhotoList data={data} />
      <div ref={ref} className="size-10" />

      {isFetchingNextPage && (
        <div className="w-full text-xl font-semibold flex items-center justify-center gap-x-2 pb-3">
          Loading...
          <RefreshCw className="animate-spin" />
        </div>
      )}
    </>
  );
};

export default Home;
