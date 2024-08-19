"use client ";

import { useEffect, useState } from "react";
import { Breed } from "@thatapicompany/thecatapi";
import Select, { SingleValue } from "react-select";
import { usePathname, useRouter } from "next/navigation";

/*As I explore the search by breeds works only for cats, even if I try to fetch API directly via REST request.
  I also tried to manually check it out, but there is also some troubles with getting dogs with specific breeds.
*/

export const SearchInput = ({
  defaultValue,
}: {
  defaultValue?: string | null;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const onSelect = (e: SingleValue<{ value: Breed; label: string }>) => {
    if (e?.value) {
      return router.push(`${pathname}?breed_id=${e?.value}`);
    }
    return router.push(pathname);
  };

  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);
  const breedsArray = Object.keys(Breed).map((key) => ({
    value: Breed[key as keyof typeof Breed],
    label: key,
  }));
  if (!isMounted) return <></>;
  return (
    <>
      <Select
        id={Date.now().toString()}
        name="breed"
        defaultValue={
          breedsArray.find((breed) => breed.value === defaultValue) ?? null
        }
        placeholder="Search for breeds"
        className="min-w-[250px]"
        isClearable={true}
        isSearchable={true}
        options={breedsArray}
        onChange={onSelect}
        styles={{
          control: (base) => ({
            ...base,
            boxShadow: "none",
          }),
        }}
      />
    </>
  );
};
