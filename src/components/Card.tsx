import React from "react";

// Define the type for the props
interface CardProps {
  github: string;
  title: string;
  description: string;
  link?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:w-[18em] sm:h-[22em]  lg:w-[23em] lg:h-[20em] md:flex-col ">
      <h5 className="mb-2 text-[2em] font-medium leading-tight text-neutral-800 dark:text-neutral-50 h-[2.7em] flex items-center sm:text-[1.5em]">
        {props.title}
      </h5>
      <div className="flex flex-col justify-between h-[11.5em]">
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
          {props.description}
        </p>
        <div className="flex gap-2">
          <a
            href={props.github}
            type="button"
            className="border-2 rounded-md p-2 hover:bg-black hover:text-white"
          >
            Github
          </a>
          {props.link && (
            <a
              href={props.link}
              type="button"
              className="border-2 rounded-md p-2 px-4 hover:bg-black hover:text-white"
            >
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
