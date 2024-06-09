export const Tick = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center max-w-max justify-center shrink gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="self-start"
        fill="none"
      >
        <path
          d="M25.3332 9.58325L12.4998 22.4166L6.6665 16.5833"
          stroke="#1E6EE2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="max-w-[15rem] text-left">{text}</span>
    </div>
  );
};
