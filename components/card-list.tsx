import React from "react";
import { type InfiniteData } from "@tanstack/react-query";
import { type Image as ImageType } from "@thatapicompany/thecatapi/dist/types";

import { CardItem } from "@/components/card-item";

type Props = {
  data: InfiniteData<ImageType[] | undefined, unknown> | undefined;
};

export const PhotoList = ({ data }: Props) => {
  return (
    <div className="lg:columns-3 md:columns-2 columns-1 gap-2">
      {data?.pages.map((images, index) => (
        <React.Fragment key={index}>
          {images?.map((image) => (
            <CardItem key={image.id} {...image} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
