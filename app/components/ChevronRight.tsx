export function ChevronRight({ stroke }: { stroke?: string }) {
  return (
    <svg
      className={"w-[1.5rem] h-[1.5rem]"}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
