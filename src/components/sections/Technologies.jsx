export default function Technologies() {
  const technologies = [
    {
      nombre: "React",
      descripcion: "Desarrollo de interfaces modernas y componentes reutilizables."
    },
    {
      nombre: "JavaScript",
      descripcion: "Programación moderna ES6+, manipulación del DOM y APIs."
    },
    {
      nombre: "Tailwind CSS",
      descripcion: "Diseño rápido mediante utilidades y componentes responsive."
    },
    {
      nombre: "Node.js",
      descripcion: "Creación de servicios y aplicaciones del lado del servidor."
    },
    {
      nombre: "Python",
      descripcion: "Automatización de procesos, scripts y análisis de datos."
    },
    {
      nombre: "SQL Server",
      descripcion: "Diseño, consultas y optimización de bases de datos."
    },
    {
      nombre: "Power BI",
      descripcion: "Dashboards, indicadores y análisis de información."
    },
    {
      nombre: "Git & GitHub",
      descripcion: "Control de versiones y trabajo colaborativo."
    }
  ];

  return (
    <section
      id="tecnologias"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
          Tecnologías
        </h2>

        <div className="h-1 w-12 bg-emerald-400 rounded-full mt-3"></div>

        <p className="mt-4 text-center max-w-2xl text-gray-600 dark:text-gray-400">
          Tecnologías y herramientas que utilizo para desarrollar soluciones,
          automatizar procesos y crear aplicaciones modernas.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <article
            key={tech.nombre}
            className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-500 font-bold text-xl mb-5">
              {tech.nombre.charAt(0)}
            </div>

            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
              {tech.nombre}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {tech.descripcion}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}