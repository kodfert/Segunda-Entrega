// project imports
import { useState, useEffect } from 'react';
import ProfesorForm from './components/profesorForm'; // Cambiado a ProfesorForm

const Edit = () => {
  const profesor = {
    name: 'Néstor Dario',
    lastName: 'Osorio Noreña',
    email: 'nosorio@umanizales.edu.co',
    phone: '322222154',
    address: 'Manizales',
    age: 33,
    gender: 'Masculino',
    typeDocument: 'Pasaporte',
    typeSubject: 'Aprendizaje automatico',
    numberDocument: '1053477879',
    dateBirth: '1990-05-30'
  };

  return <ProfesorForm profesor={profesor} isEdit />;
};

export default Edit;
