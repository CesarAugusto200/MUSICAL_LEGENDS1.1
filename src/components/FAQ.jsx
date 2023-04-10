import React, { useState } from 'react';
import "../assets/Style/FAQ.css"
const faqs = [
  {
    question: '¿Como es el metodo de pago?',
    answer: 'Para el metodo de pago se hace directamente con la persona que te dara coaching(Impartira tus clases).'
  },
  {
    question: '¿Cuánto tiempo duran las lecciones?',
    answer: 'La duración de las lecciones varía dependiendo del curso que estés tomando. Por lo general, las lecciones duran entre 30 y 60 minutos.'
  },
  {
    question: '¿Cómo puedo contactar al instructor del curso?',
    answer: 'Puedes agendar una citas con el instructor a través de la plataforma interna. Si tienes problemas para contactar al instructor, puedes enviar un correo electrónico al soporte técnico.'
  },

  {
    question: '¿Qué tipos de clases de música ofrecen?',
    answer: 'Ofrecemos clases de  piano y canto Proximamente tendremos mas personal para cubrir las diferentes areas'
  },

  {
    question: '¿Qué niveles de habilidad atienden?',
    answer: 'Ofrecemos clases para principiantes, intermedios y avanzados.'
  },
  {
    question: '¿Cuánto cuestan las clases?',
    answer: 'Depende del tipo de clase. En general, los estudiantes necesitan traer su propio instrumento o utilizar uno de los que tenemos disponibles.'
  },
  {
    question: '¿Qué tipo de materiales se necesitan para las clases?',
    answer: 'Ofrecemos clases para principiantes, intermedios y avanzados.'
  },
  {
    question: '¿Ofrecen clases privadas o en grupo?',
    answer: 'Ofrecemos ambas opciones. Las clases privadas son ideales para aquellos que desean atención individualizada, mientras que las clases en grupo son una forma divertida de aprender junto a otros estudiantes.'
  },
  {
    question: '¿Cuál es el horario de las clases?',
    answer: 'Los horarios varía según el tipo de clase y tambien depende el como se hayan organizado con la persona que lo atendera'
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderFaqs = () => {
    return faqs.map((faq, index) => {
      const active = index === activeIndex ? 'active' : '';

      return (
        <div className="faq" key={index}>
          <div className={`question ${active}`} onClick={() => handleClick(index)}>
            <i className="dropdown icon"></i>
            {faq.question}
          </div>
          <div className={`answer ${active}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ui styled accordion">
      {renderFaqs()}
    </div>
  );
};

export default Faq;
