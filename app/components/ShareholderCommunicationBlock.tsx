import { twMerge } from "tailwind-merge";

export default function ShareholderCommunicationBlock({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge(
        "text-white text-center bg-[#17506C] flex flex-col gap-2 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:grow [&_strong]:text-sm [&_strong]:font-normal [&_a]:text-lg [&_a]:font-bold [&_a]:hover:text-[#ff0] [&_a]:bg-[#14445C] [&_a]:hover:bg-[#0C2836] [&_a]:w-full [&_a]:p-5 [&_a]:block",
        className
      )}
    >
      {children}
    </div>
  );
}
