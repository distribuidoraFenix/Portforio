import { useState, useEffect } from 'react';

//Hooks
import useTheme from './hooks/useTheme';

// Componentes
import ButtonTheme from './components/ui/ButtonTheme';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import ContactForm from './components/sections/ContactForm';
import AboutMe from './components/sections/AboutMe';
import Technologies from './components/sections/Technologies';
import Experience from './components/sections/Experience';
import SuccessCases from './components/sections/SuccessCases';

// Data
import projects from './data/projects';
import experiences from './data/experiences';
import successCases from './data/successcases';
import technologies from './data/technologies';

function App() {
  // 1. Estado para el modo oscuro con lectura de LocalStorage y sistema
  const { isDark, toggleTheme } = useTheme();

  // 2. Estado para controlar los campos del formulario de contacto
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', form);
    setEnviado(true);
    setForm({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

 

  return ( 
    <main className="min-h-screen bg-(--background) text-(--foreground) transition-colors duration-500 font-sans selection:bg-emerald-400 selection:text-slate-900">
      
      {/* Botón flotante del Tema*/}
        <ButtonTheme isDark={isDark} toggleTheme={toggleTheme} />

      {/* SECCIÓN HERO */}
        <Hero />

      {/* SECCIÓN ABOUT ME */}
      <AboutMe />
      
      {/* SECCIÓN PROYECTOS */}
      <Projects projects ={projects} />

      {/* SECCIÓN SUCCESS CASES*/}
      <SuccessCases successCases={successCases} />

      {/* SECCIÓN TECHNOLOGIES */}
      <Technologies technologies={technologies} />

      {/* SECCIÓN CV - EXPERIENCIA */}
      <Experience  experiences={experiences}/>
    
      {/* SECCIÓN CONTACTO */}
      <ContactForm  />

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-gray-400 dark:text-gray-600 border-t border-gray-200 dark:border-gray-900">
        © {new Date().getFullYear()} Portafolio. Hecho con React, JS & Tailwind.
      </footer>
    </main> 
  );
}

export default App;

