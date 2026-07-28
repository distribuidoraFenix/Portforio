
import { TechnologyCard } from "../ui/TechnologyCard";
import technologies from "../../data/technologies";

export default function Technologies() {

  return (
    <section
      id="tecnologias"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight text-(--foreground)">
          Tecnologías
        </h2>

        <div className="h-1 w-12 bg-emerald-400 rounded-full mt-3"></div>

      <p className="mt-4 max-w-2xl text-center font-semibold text-(--foreground-g)">
          Tecnologías y herramientas que utilizo para desarrollar soluciones,
          automatizar procesos y crear aplicaciones modernas.
        </p>
      </div>
     

      <div className=" flex flex-wrap gap-8 justify-center ">
        {technologies.map((tech) => (
          <TechnologyCard 
            key={tech.name} 
            name={tech.name} 
            iconName={tech.iconName} 
          />
        ))}
      </div>
    </section>
  );
}