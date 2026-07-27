export default function Hero (){
    return(
         <header className="min-h-screen flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto"> 
        <h1 className="text-(--primary) text-5xl font-black transition-all duration-500 hover:scale-105 cursor-pointer tracking-tight 
          sm:text-6xl "> 
          Adrian Riveros Vallejos 
        </h1> 
        <p className="mt-4 text-xl font-medium  max-w-xl text-(--foreground)">
          Especialista en Optimización de Procesos Soluciones Tecnológicas y Automatización
        </p>
         <p className="mt-4 text-md font-medium  max-w-xl text-(--second) ">
          Del análisis del negocio al desarrollo de soluciones tecnológicas.
        </p>

        {/* Redes Sociales con Iconos SVG Integrados */}
        <div className="mt-6 flex gap-5 text-gray-700 dark:text-gray-400">
          <a href="https://github.com/distribuidoraFenix" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors p-1" aria-label="GitHub">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/adrianriverosv/" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors p-1" aria-label="LinkedIn">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-(--foreground-w) justify-center">
          <a href="#projects" className="h-12 w-36 px-6 py-3 rounded-xl bg-(--primary) hover:bg-(--primary-hover)  font-semibold shadow-lg shadow-emerald-500/20 transition-all cursor-pointer">Proyectos</a>
          <a href="#experience" className="h-12 w-36 px-6 py-3 rounded-xl bg-(--second) hover:bg-(--second-hover)  font-semibold shadow-lg shadow-emerald-500/20 transition-all cursor-pointer">Experiencia</a>
          <a href="#contact" className="h-12 w-36 px-6 py-3 rounded-xl bg-(--secondary) hover:bg-(--secondary-hover) text-gray-950 font-semibold shadow-lg shadow-gray-500/20 transition-all cursor-pointer">Contacto</a>
        </div>
      </header>
    )
}