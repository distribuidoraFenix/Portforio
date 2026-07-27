import ftAdrianRiveros from "../../assets/ft_adrian_riveros.webp";

export default function AboutMe(){
    return(
        <section id="about-me" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-10">

            <header className="flex flex-col items-center mb-12">
                <h2 className="text-3xl text-(--foreground) font-extrabold sm:text-4xl tracking-tight">
                    Sobre mí
                </h2>
                <span className="h-1 w-12 bg-(--primary) rounded-full mt-3"></span>
            </header>

             <section className="grid grid-cols-1 md:grid-cols-2  gap-4 items-center rounded-2xl bg-(--surface)
              border border-(--border-section) text-(--foreground-g) p-8">
                 <figure className="row-span-1 sm:row-span-2 w-80 h-80 mx-auto py-auto overflow-hidden rounded-xl">
                    <img 
                        src={ftAdrianRiveros} 
                        alt="Fotografía de Adrian Riveros Vallejos" 
                        className="w-full h-full object-cover "
                    />
                </figure>
               
                     <p className="leading-relaxed ">
                    Durante más de 22 años he trabajado en áreas comerciales, administrativas y operativas, 
                    donde aprendí que detrás de cada proceso existen oportunidades de mejora.
                    </p>
                    <p className=" leading-relaxed ">
                        Esa forma de entender el negocio despertó mi interés por desarrollar soluciones tecnológicas 
                        que simplificaran el trabajo diario. Comencé automatizando tareas con Excel y VBA, y con el tiempo
                        evolucioné hacia el desarrollo de aplicaciones web con la tecnología de base HTML,
                        CSS, JavaScript, posteriormente para aplicativos mas robustos utilizando tecnologías como React, Next.js, 
                        TypeScript.
                    </p>
                    <p className="col-span-2 leading-relaxed ">
                        Más que desarrollar software, disfruto comprender cómo funciona una organización, identificar sus necesidades
                        y diseñar herramientas que aporten eficiencia, reduzcan errores y generen resultados medibles.
                    </p>
                    <p className="col-span-2 leading-relaxed ">
                        Actualmente continúo fortaleciendo mis conocimientos en desarrollo Full Stack mientras 
                        construyo soluciones enfocadas en resolver problemas reales de negocio.
                    </p>
                
            </section>
        </section>
    )
}