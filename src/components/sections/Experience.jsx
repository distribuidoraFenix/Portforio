export default function Experience({experiences}) {


  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight text-(--foreground)">
          Mi Experiencia
        </h2>

         <div className="h-1 w-12 bg-(--primary) rounded-full mt-3"></div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">

        {experiences.map((exp) => (
          <article
            key={exp.empresa}
           className="flex flex-col justify-between px-4 mx-auto  p-6 rounded-2xl
              bg-(--surface) border border-(--border-section) min-h-80
               shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>

              <span className="text-sm text-(--primary) font-bold">
                {exp.periodo}
              </span>

              <h3 className="text-xl font-bold mt-2 text-(--foreground)">
                {exp.cargo}
              </h3>

              <p className="font-medium text-(--second) mt-1">
                {exp.empresa}
              </p>

              <p className="mt-4 text-sm text-(--foreground-g) font-semibold leading-relaxed">
                {exp.descripcion}
              </p>

            </div>
          </article>
        ))}

        <a
          href="/cv"
          className="rounded-2xl border-2 border-dashed border-(--primary) flex flex-col justify-center items-center dark:hover:bg-emerald-400/20 hover:bg-emerald-300/50 transition-all duration-300 group"
        >
          <span className="text-6xl font-light text-(--primary) group-hover:scale-150 transition-transform">
            +
          </span>

          <p className="mt-3 font-semibold text-(--second)">
            Ver experiencia completa
          </p>

          <p className="text-sm text-(--foreground-g) mt-2">
            CV Digital
          </p>
        </a>

      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-6">

        <article className="p-6 rounded-2xl bg-(--surface) border border-(--border-section) shadow-sm min-h-80">

          <span className="text-sm text-(--primary) font-bold">
            {experiences[0].periodo}
          </span>

          <h3 className="text-xl font-bold mt-2 text-(--foreground)">
            {experiences[0].cargo}
          </h3>

          <p className="font-medium text-(--second) mt-1">
            {experiences[0].empresa}
          </p>

          <p className="mt-4 text-sm text-(--foreground-g) font-semibold ">
            {experiences[0].descripcion}
          </p>

        </article>

        <a
          href="/cv"
          className="block text-center py-4 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-(--foreground) font-semibold transition-all"
        >
          Explorar más experiencia →
        </a>

      </div>
    </section>
  );
}