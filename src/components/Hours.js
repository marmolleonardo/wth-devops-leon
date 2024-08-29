import React, { useState, useEffect } from 'react';

function Hours() {
  const [isOpen, setIsOpen] = useState(false);
  const [openingHours, setOpeningHours] = useState([]);

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0: Sunday, 6: Saturday

    let startHour, endHour;
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Lunes a Viernes
      startHour = 10;
      endHour = 17;
    } else { // Sábado o Domingo
      startHour = 9;
      endHour = 20;
    }

    const hours = [];
    for (let hour = startHour; hour < endHour; hour++) {
      hours.push(`${hour}:00`);
    }

    setOpeningHours(hours);
    setIsOpen(hours.includes(`${today.getHours()}:00`));
  }, []);

  return (
    <div>
      <h2>Horario de Apertura</h2>
      {isOpen ? (
        <p>Estamos abiertos hoy de {openingHours[0]} a {openingHours[openingHours.length - 1]}</p>
      ) : (
        <p>Cerrado hoy</p>
      )}
    </div>
  );
}

export default Hours;