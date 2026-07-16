import { useState } from 'react';

export default function useContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', form);
    setEnviado(true);
    setForm({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

  return {
    form,
    enviado,
    handleChange,
    handleSubmit,
  };
}
