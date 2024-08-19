import Image from "next/image";
import wikipediaIcon from "@/public/wiki.svg";
import { LinkButton } from "../link-button";

type Props = {
  wikipedia_url?: string;
};
export const ReadMore = ({ wikipedia_url }: Props) => {
  if (!wikipedia_url) return null;
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Read more:</h3>
      <LinkButton
        target="_blank"
        href={wikipedia_url || ""}
        className="border-2 border-stone-900 w-max"
      >
        <Image src={wikipediaIcon} className="size-8" alt="wikipedia" />
        Wikipedia
      </LinkButton>
    </div>
  );
};
