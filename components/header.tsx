"use client";

import { CatIcon, DogIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/link-button";
import Image from "next/image";
import logo from "@/public/logo.png";

type Props = {};
export const Header = ({}: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const breed_id = searchParams.get("breed_id");

  return (
    <header className="z-50 sticky top-0 min-h-20 border-b shadow-md flex items-center flex-wrap gap-y-2  gap-x-4 bg-white">
      <Image className="" src={logo} width={100} alt="" />
      <LinkButton
        href={{ pathname: "/cats", query: breed_id ? { breed_id } : {} }}
        className={cn(
          pathname.startsWith("/cats") && "bg-amber-700/10 text-amber-700",
          "ml-auto"
        )}
      >
        <CatIcon />
        Cats
      </LinkButton>
      <LinkButton
        href={{ pathname: "/dogs", query: breed_id ? { breed_id } : {} }}
        className={cn(
          pathname.startsWith("/dogs") && "bg-amber-700/10 text-amber-700",
          "mr-auto"
        )}
      >
        <DogIcon />
        Dogs
      </LinkButton>
    </header>
  );
};
