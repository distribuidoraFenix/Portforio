export default function AboutMe(){
    return(
        <section id="sobre-mi" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-10">

    <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
            Sobre mí
        </h2>

        <div className="h-1 w-12 bg-emerald-400 rounded-full mt-3"></div>
    </div>

    <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8">

        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Soy un profesional orientado a la mejora continua, la automatización
            de procesos y el desarrollo de soluciones tecnológicas que generan
            valor para las organizaciones.
        </p>

        <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
            Disfruto analizar problemas, comprender el negocio y transformar
            necesidades operativas en herramientas digitales eficientes y
            fáciles de utilizar.
        </p>

    </div>

</section>
    )
}