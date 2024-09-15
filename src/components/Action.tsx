type ActionProps = {
  img: string;
  className?: string;
};

export const Action = ({ img, className }: ActionProps) => {
  return (
    <div className={`w-[130px] aspect-square rounded-full grid place-items-center  ${className ? className: ""}`}>
      <div className="bg-neutral-200 w-[105px] aspect-square rounded-full grid place-items-center shadow-[0_-3px_2px_3px_#DADADA] mt-2">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};
