export default function Experience({experiences}) {


  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
          Mi Experiencia
        </h2>

        <div className="h-1 w-12 bg-emerald-400 rounded-full mt-3"></div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">

        {experiences.map((exp) => (
          <article
            key={exp.empresa}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>

              <span className="text-xs text-emerald-500 font-semibold">
                {exp.periodo}
              </span>

              <h3 className="text-xl font-bold mt-2">
                {exp.cargo}
              </h3>

              <p className="font-medium text-gray-500 mt-1">
                {exp.empresa}
              </p>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.descripcion}
              </p>

            </div>
          </article>
        ))}

        <a
          href="/cv"
          className="rounded-2xl border-2 border-dashed border-emerald-400 flex flex-col justify-center items-center hover:bg-emerald-400/5 transition-all duration-300 group"
        >
          <span className="text-6xl font-light text-emerald-500 group-hover:scale-110 transition-transform">
            +
          </span>

          <p className="mt-3 font-semibold">
            Ver experiencia completa
          </p>

          <p className="text-sm text-gray-500 mt-2">
            CV Digital
          </p>
        </a>

      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-6">

        <article className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">

          <span className="text-xs text-emerald-500 font-semibold">
            {experiences[0].periodo}
          </span>

          <h3 className="text-xl font-bold mt-2">
            {experiences[0].cargo}
          </h3>

          <p className="font-medium text-gray-500 mt-1">
            {experiences[0].empresa}
          </p>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {experiences[0].descripcion}
          </p>

        </article>

        <a
          href="/cv"
          className="block text-center py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold transition-all"
        >
          Explorar más experiencia →
        </a>

      </div>
    </section>
  );
}