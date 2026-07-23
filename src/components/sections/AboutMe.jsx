import ftAdrianRiveros from "../../assets/ft_adrian_riveros.webp";

export default function AboutMe(){
    return(
        <section id="sobre-mi" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-10">

            <header className="flex flex-col items-center mb-12">
                <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
                    Sobre mí
                </h2>
                <span className="h-1 w-12 bg-emerald-400 rounded-full mt-3"></span>
            </header>

             <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8">
                 <figure className="w-full h-full min-h-[300px] relative overflow-hidden rounded-xl">
                    <img 
                        src={ftAdrianRiveros} 
                        alt="Fotografía de Adrian Riveros Vallejos" 
                        className="w-full h-full object-cover "
                    />
                </figure>
                <article className="space-y-5 leading-relaxed text-gray-600 dark:text-gray-400">
                     <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                    Durante más de 22 años he trabajado en áreas comerciales, administrativas y operativas, 
                    donde aprendí que detrás de cada proceso existen oportunidades de mejora.
                    </p>
                    <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                        Esa forma de entender el negocio despertó mi interés por desarrollar soluciones tecnológicas 
                        que simtmplificaran el trabajo diario. Comencé automavizando tareas con Excel y VBA, y con el tiempo
                        evolucioné hacia el desarrollo de aplicaciones web con la tecnología de base HTML,
                        CSS, JAvaScript, posteriormente para aplicativos mas robustos utilizando tecnologías como React, Next.js, 
                        TypeScript y Supabase.
                    </p>
                    <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                        Más que desarrollar software, disfruto comprender cómo funciona una organización, identificar sus necesidades
                        y diseñar herramientas que aporten eficiencia, reduzcan errores y generen resultados medibles.
                    </p>
                    <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                        Actualmente continúo fortaleciendo mis conocimientos en desarrollo Full Stack mientras 
                        construyo soluciones enfocadas en resolver problemas reales de negocio.
                    </p>
                </article>
            </section>
        </section>
    )
}