type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold border rounded-md py-2 px-6 ${
        className ? className : ""
      }`}
    >
      {text}
    </button>
  );
};
