import { Choices } from "../models/Choices";
import { Action } from "./Action";

export const GameStart = () => {
  const paper = new Choices(
    "paper",
    "/paper.svg",
    "bg-blue-100 shadow-[0_6px_0_#2A45C2]"
  );
  const scissors = new Choices(
    "scissors",
    "/scissors.svg",
    "bg-yellow-100 shadow-[0_6px_0_#C76C1B]"
  );
  const rock = new Choices(
    "rock",
    "/rock.svg",
    "bg-red-100 shadow-[0_6px_0_#9D1634]"
  );

  return (
    <article className="my-[233px] flex justify-center items-center">
      <div className="bg-triangle bg-no-repeat w-[311px] h-[311px] relative">
      <div className="absolute bottom-[250px] left-[-35px]">
        <Action choice={paper} />
      </div>
      <div className="absolute bottom-[250px] right-[-35px]">
        <Action choice={scissors} />
      </div>
      <div className="absolute top-52 left-24">
        <Action choice={rock} />
      </div>
      </div>
    </article>
  );
};
