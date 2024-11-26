import { Icons } from "./ui/icons";

const config = [
  {
    name: "Javascript",
    icon: <Icons.js className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "Tailwind",
    icon: <Icons.tailwind className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "React",
    icon: <Icons.react className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "Typescript",
    icon: <Icons.ts className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "Node.js",
    icon: <Icons.nodejs className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "Express.js",
    icon: <Icons.express className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "MongoDB",
    icon: <Icons.mongodb className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "Next.js",
    icon: <Icons.nextjs className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "PostgreSQL",
    icon: <Icons.postgres className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "Python",
    icon: <Icons.python className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "Docker",
    icon: <Icons.docker className="size-5 sm:size-6 lg:size-8" />,
  },
  {
    name: "Linux",
    icon: <Icons.linux className="size-5 sm:size-6 lg:size-8" />,
  },
];

export function Skills() {
  return (
    <section className="flex flex-col items-center space-y-4">
      <h2 className="mr-auto text-start text-lg font-bold text-accent-purple md:mx-auto md:py-8 md:text-4xl">
        <span className="hidden text-green-300 md:inline">code</span>
        <span className="hidden text-accent-purple md:inline">:</span>
        <span className="text-cyan-300 max-md:uppercase">skills</span>
      </h2>
      <div className="grid w-full max-w-4xl grid-cols-3 gap-5 rounded-md bg-stone-900/90 px-6 py-5 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] md:grid-cols-6 md:gap-8 md:px-8 md:py-10">
        {config.map((item) => (
          <span className="flex flex-col items-center gap-y-1" key={item.name}>
            {item.icon}
            <span className="rounded-full px-3 py-1 text-xs font-medium leading-5 text-accent/80">
              {item.name}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
