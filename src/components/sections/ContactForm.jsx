import useContactForm from '../../hooks/useContactForm'; 

export default function ContactForm() {
  const { form, enviado, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20 px-6 max-w-xl mx-auto border-t border-gray-200 dark:border-gray-900 scroll-mt-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight text-(--foreground)">Hablemos</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          ¿Tienes un proyecto en mente? Escríbeme directamente desde aquí.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Nombre</label>
          <input 
            type="text" 
            name="nombre" // Importante: debe coincidir con la clave del estado
            required 
            value={form.nombre} 
            onChange={handleChange} 
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400 transition-colors text-(--foreground)" 
            placeholder="Tu nombre" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Correo electrónico</label>
          <input 
            type="email" 
            name="email" // Importante: debe coincidir con la clave del estado
            required 
            value={form.email} 
            onChange={handleChange} 
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400 transition-colors text-(--foreground)" 
            placeholder="correo@ejemplo.com" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Mensaje</label>
          <textarea 
            rows="4" 
            name="mensaje" // Importante: debe coincidir con la clave del estado
            required 
            value={form.mensaje} 
            onChange={handleChange} 
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 focus:outline-none focus:border-emerald-400 dark:focus:border-emerald-400 transition-colors resize-none text-(--foreground)" 
            placeholder="Cuéntame sobre tu idea..." 
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
        >
          Enviar Mensaje
        </button>
        {enviado && (
          <div className="p-3 text-center text-sm rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 font-medium">
            ¡Mensaje enviado con éxito! Te responderé pronto.
          </div>
        )}
      </form>
    </section>
  );
}
