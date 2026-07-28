import StackIcon from "tech-stack-icons";

export function TechnologyCard({ name, iconName }) {
  return (
    <article className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl w-36 h-36 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl  flex items-center justify-center font-bold text-xl mb-5">
        <StackIcon name={iconName} />
      </div>
      <h3 className="font-semibold text-sm text-(--primary)">
        {name}
      </h3>
    </article>
  );
}
