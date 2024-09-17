import { Choices } from "../models/Choices";

type ActionProps = {
  choice: Choices;
};

export const Action = ({ choice }: ActionProps) => {
  return (
    <button
      className={`w-[130px] aspect-square rounded-full grid place-items-center  ${choice.className}`}
    >
      <div className="bg-neutral-200 w-[105px] aspect-square rounded-full grid place-items-center shadow-[0_-3px_2px_3px_#DADADA] mt-2">
        <img src={choice.img} alt={choice.name} />
      </div>
    </button>
  );
};
