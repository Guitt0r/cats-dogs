"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Image as ImageType } from "@thatapicompany/thecatapi/dist/types";
import { imageLoader } from "@/lib/utils";

type Props = {} & ImageType;

export const CardItem = ({ id, url, height, width, breeds }: Props) => {
  const pathname = usePathname();
  return (
    <div className="break-inside-avoid mb-2 border rounded-md overflow-hidden shadow-md hover:shadow-black/40 transition-all">
      <Link href={pathname + "/" + id}>
        <Image
          loader={imageLoader}
          priority
          className="w-full h-auto"
          src={url}
          width={width || 250}
          height={height || 250}
          alt=""
        />
        {breeds?.map((breed, index) => (
          <p
            className="p-2 border-t text-center text-lg font-medium drop-shadow-md"
            key={index}
          >
            {breed.name}
          </p>
        ))}
      </Link>
    </div>
  );
};
