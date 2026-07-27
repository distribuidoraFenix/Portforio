export default function Technologies({ technologies }) {

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {technologies.map((tech) => (
          <article
            key={tech.nombre}
           className="flex flex-col w-50 justify-center items-center p-6 rounded-2xl bg-(--surface) border border-(--border-section) shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"

          >
            <div className="w-14 h-14 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-500 font-bold text-xl mb-5">
              {tech.nombre.charAt(0)}
            </div>

            <h3 className="font-semibold text-lg text-(--primary)">
              {tech.nombre}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}