export default function Projects({ projects }){
    return(
  <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">Mis Proyectos</h2>
          <div className="h-1 w-12 bg-emerald-400 rounded-full mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="h-40 w-full rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 flex items-center justify-center text-gray-400 dark:text-gray-600 font-bold border border-gray-200/50 dark:border-gray-800/50">
                  Preview{project.id}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.desc}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-400/10 text-emerald-500 dark:text-emerald-400">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
}