export default function SuccessCases({ successCases }) {

  return (
    <section
      id="casos-exito"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10"
    >
      {/* Encabezado */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
          Casos de Éxito
        </h2>

        <div className="h-1 w-12 bg-emerald-400 rounded-full mt-3"></div>

        <p className="mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          Algunos resultados obtenidos mediante automatización de procesos,
          desarrollo de software y soluciones orientadas al negocio.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {successCases.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                {item.titulo}
              </h3>

              <div className="space-y-5">

                {/* Problema */}
                <div className="flex gap-3">
                  <span className="text-xl">⚠️</span>

                  <div>
                    <h4 className="text-sm font-bold text-red-500 uppercase">
                      Problema
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.problema}
                    </p>
                  </div>
                </div>

                {/* Solución */}
                <div className="flex gap-3">
                  <span className="text-xl">💡</span>

                  <div>
                    <h4 className="text-sm font-bold text-blue-500 uppercase">
                      Solución
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.solucion}
                    </p>
                  </div>
                </div>

                {/* Resultado */}
                <div className="flex gap-3">
                  <span className="text-xl">📈</span>

                  <div>
                    <h4 className="text-sm font-bold text-emerald-500 uppercase">
                      Resultado
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.resultado}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tecnologías */}
            <div className="mt-8 flex flex-wrap gap-2">
              {item.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-400/10 text-emerald-500 dark:text-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}