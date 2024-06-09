export const Cross = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center max-w-max justify-center shrink">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M8 8L24 24"
          stroke="#E54937"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 8L8 24"
          stroke="#E54937"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="max-w-[15rem] text-left">{text}</span>
    </div>
  );
};
