import sisVentasDistribuidoraFenix from "../../assets/Sistema_Ventas_Distribuidora_Fenix.webp";

export default function Projects({ projects }){
    return(
  <section id="projects" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-10
           ">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-(--foreground)">Mis Proyectos</h2>
          <div className="h-1 w-12 bg-(--primary) rounded-full mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 
            md:grid-cols-2 
            xl:grid-cols-3 ">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="flex flex-col justify-between px-4 min-w-80 max-w-80 mx-auto max-h-140 min-h-140 p-6 rounded-2xl
              bg-(--surface) border border-(--border-section)
               shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
            
                <div className="h-40 w-full rounded-xl  mb-4 flex items-center justify-centerborder border-gray-200/50 dark:border-gray-800/50">
                  <figure className="  w-full h-full mx-auto py-auto overflow-hidden rounded-xl">
                    <img 
                        src={sisVentasDistribuidoraFenix} 
                        alt="Captura de pantalla del Dashboard del Sistema de ventas de Distribuidora Fenix" 
                        className="w-full h-full object-cover"
                    />
                </figure>
                </div>
                <h3 className="text-xl font-bold mb-2 text-(--foreground)">{project.titulo}</h3>
                <p className="text-(--foreground-g) text-sm leading-relaxed">{project.desc}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-(--surface-primary) text-(--foreground-primary)">
                    {tag}
                  </span>
                ))}
              </div>    
              <h6 className="text-sm text-(--warning) italic font-semibold mb-2  mt-4"> <span className="text-(--danger)">*  </span> {project.disponibilidad}</h6>
            </article>
          ))}
        </div>
      </section>
    );
}