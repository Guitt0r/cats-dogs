type Props = {
  origin?: string;
  country_code?: string;
};
export const Origin = ({ origin, country_code }: Props) => {
  return (
    <div className="flex items-center gap-x-2">
      <h3 className="text-lg font-semibold">Origin:</h3>
      <div className="flex items-center gap-x-1">
        <p className="font-medium text-lg">{origin ?? "Unknown"}</p>
        <span
          className={`fi fi-${country_code?.toLowerCase()} !w-10 !leading-6`}
        />
      </div>
    </div>
  );
};
