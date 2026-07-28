 //importamos las imagenes 
 import sisVentasDistribuidoraFenix from "../assets/captions/Sistema_Ventas_Distribuidora_Fenix.webp";
 import sisAdminDistribuidoraFenix from "../assets/captions/Sistema_Administrativo_Distribuidora_Fenix.webp"
 
 // Listado de proyectos
 const projects = [
    {
      id: 1,
      titulo: "Sistema Administrativo",
      disponibilidad: "Disponible bajo solicitud",
      image: sisAdminDistribuidoraFenix,
      altimage: "Captura de pantalla del sistena Administrativo de Distribudora Fenix",
      desc: "Sistema de gestión desarrollado para optimizar procesos administrativos de flujo de dinero en oficina central, procesos internos y apoyar la operación y planificación de distintas sucursales.",
      tags: ["Node.js", "React", "Vite", "TypeScript", "React Router", "TailwindCSS","Supabase", "PostgreSQL", "TanStack Table", "JsPDF", "xlsx", "GitHub", "Vercel" ]
    },
    {
      id: 2,
      titulo: "Dashboard Analytics",
      disponibilidad: "Disponible bajo solicitud",
      image: sisVentasDistribuidoraFenix,
      altimage: "Captura de pantalla del sistema de Ventas de Distribuidora Fenix",
      desc: "Panel de administración interactivo con gráficos en tiempo real y métricas avanzadas.",
      tags: ["Vite", "JavaScript", "Tailwind"]
    },
    {
      id: 3,
      titulo: "Task Manager",
      disponibilidad: "Disponible bajo solicitud",
      image: sisVentasDistribuidoraFenix,
      altimage: "Captura de pantalla del sistema de Ventas de Distribuidora Fenix",
      desc: "Aplicación de gestión de tareas diarias con filtros, prioridades y almacenamiento local.",
      tags: ["React", "LocalStorage", "CSSv4"]
    },
     {
      id: 4,
      titulo: "Task Manager",
      disponibilidad: "Disponible bajo solicitud",
      image: sisVentasDistribuidoraFenix,
      altimage: "Captura de pantalla del sistema de Ventas de Distribuidora Fenix",
      desc: "Aplicación de gestión de tareas diarias con filtros, prioridades y almacenamiento local.",
      tags: ["React", "LocalStorage", "CSSv4"]
    }
  ];

  export default projects;