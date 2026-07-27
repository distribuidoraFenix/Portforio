export default function SuccessCases({ successCases }) {

  return (
    <section
      id="success-cases"
      className="py-20 px-4 max-w-6xl mx-auto scroll-mt-10"
    >
      {/* Encabezado */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight text-(--foreground)">
          Casos de Éxito
        </h2>
        <div className="h-1 w-12 bg-(--primary) rounded-full mt-3"></div>

        <p className="mt-4 max-w-2xl text-center font-semibold text-(--foreground-g)">
          Algunos resultados obtenidos mediante automatización de procesos,
          desarrollo de software y soluciones orientadas al negocio.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {successCases.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between px-4 min-w-80 max-w-80 mx-auto max-h-140 min-h-140 p-6 rounded-2xl
              bg-(--surface) border border-(--border-section)
               shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-(--foreground)">
                {item.titulo}
              </h3>

              <div className="space-y-5">

                {/* Problema */}
                <div className="flex gap-3">
                  <span className="text-xl">⚠️</span>

                  <div>
                    <h4 className="text-sm font-bold text-(--danger) uppercase">
                      Problema
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-(--foreground-g) ">
                      {item.problema}
                    </p>
                  </div>
                </div>

                {/* Solución */}
                <div className="flex gap-3">
                  <span className="text-xl">💡</span>

                  <div>
                    <h4 className="text-sm font-bold  text-(--second) uppercase">
                      Solución
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-(--foreground-g) ">
                      {item.solucion}
                    </p>
                  </div>
                </div>

                {/* Resultado */}
                <div className="flex gap-3">
                  <span className="text-xl">📈</span>

                  <div>
                    <h4 className="text-sm font-bold text-(--primary) uppercase">
                      Resultado
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-(--foreground-g)">
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
                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-(--surface-primary) text-(--foreground-primary)">
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