export default function AboutTheShareholderBlock({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="h-fit bg-[#0C2836] text-white p-4 flex flex-col gap-4 shadow-[0_4px_10px_0_rgba(0,0,0,0.2),0_4px_20px_0_rgba(0,0,0,0.19)] opacity-80 [&>h3]:text-xl [&>h3]:text-center [&>h3]:font-bold [&>p]:flex [&>p]:flex-col [&>p]:gap-4 [&_a]:block [&_a]:text-black [&_a]:hover:text-white [&_a]:text-center [&_a]:bg-[#f1f1f1] [&_a]:hover:bg-black [&_a]:p-2 [&_a]:w-full"
    >
      {children}
    </div>
  );
}
