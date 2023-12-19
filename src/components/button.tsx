import { twMerge } from "tailwind-merge";

export default function Button({
  message,
  onClick,
  divClasses,
  buttonClasses,
}: {
  message: string;
  onClick?: Function ;
  divClasses?: string;
  buttonClasses?: string;
}) {
  const handleClick = onClick ? () => onClick() : () => {};

  const divClassesMerged = twMerge(
    "bg-coral-red-special py-1.5 px-2 rounded inline-block",
    divClasses
  );

  const buttonClassesMerged = twMerge(
    "text-white bg-coral-red-special rounded py-1.5 px-2 border-black button-box-shadow",
    buttonClasses
  );

  return (
    <div className={divClassesMerged}>
      <button onClick={handleClick} className={buttonClassesMerged}>
        {message}
      </button>
    </div>
  );
}
