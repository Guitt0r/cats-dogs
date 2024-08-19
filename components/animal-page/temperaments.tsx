import { Badge } from "../badge";

type Props = {
  temperament?: string;
};
export const Temperaments = ({ temperament }: Props) => {
  const temperamentsArr = temperament?.split(",");
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Temperament:</h3>
      {temperamentsArr ? (
        <div className="flex flex-wrap gap-2">
          {temperamentsArr.map((temperamentItem, index) => (
            <Badge key={index}>{temperamentItem}</Badge>
          ))}
        </div>
      ) : (
        <span className="text-lg font-medium">Unknown</span>
      )}
    </div>
  );
};
