'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import tech1 from '@/public/imgs/tech1.webp'
import tech2 from '@/public/imgs/tech2.webp'

const Tech = () => {
  return (
    <>
      <section className='tech-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.h1
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center text-6xl font-bold md:text-8xl'
          >
            Tecnología
          </motion.h1>
        </div>
      </section>

      <section className='bg-primary py-24'>
        <div className='container flex flex-col items-center justify-center gap-8 text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            En EL FARO, la búsqueda insistente por mejorar, nos lleva a
            apoyarnos en el{' '}
            <span className='text-accent'>
              uso de la tecnología en todos los ámbitos.
            </span>
          </motion.p>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            La tecnología es una herramienta en la cual creemos y utilizamos,
            apoyándonos en sus diferentes usos constantemente, utilizándola como{' '}
            <span className='text-accent'>
              base del crecimiento a largo plazo.
            </span>
          </motion.p>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            A través de la tecnología, aplicamos diversidad genética para la
            mejora continua de nuestras pasturas y{' '}
            <span className='text-accent'>
              mejoramos la base nutricional para la cría sostenible de nuestros
              animales en el tiempo.
            </span>
          </motion.p>
        </div>
      </section>

      <section className='bg-foreground py-24'>
        <div className='container flex flex-col gap-12 md:flex-row'>
          <div className='flex flex-1 flex-col items-center justify-center gap-12'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={tech1} alt='paneles solares' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image src={tech2} alt='el campo visión aérea' />
            </motion.div>
          </div>
          <div className='flex flex-1 flex-col items-center justify-center gap-12'>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='bold text-xl md:text-2xl'
            >
              La investigación y desarrollo en la cruza de ADN, nos ha permitido
              mejorar la sangre de nuestros equinos y bovinos. Logramos de esta
              manera avanzar en el desafío de ofrecer ejemplares destacados en
              las dos razas, posicionando nuestra cría en lo más alto de la
              oferta zonal.
            </motion.p>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='bold text-xl md:text-2xl'
            >
              Nuestra misión es ser sustentables en el tiempo, protegiendo
              cuidadosamente el medioambiente. La generación de energía
              renovable, utilizando los más modernos instrumentos, nos ha
              permitido dar un paso hacia un futuro prometedor para las mejoras
              continuas de nuestros recursos naturales.
            </motion.p>
          </div>
        </div>
      </section>

      <section className='bg-secondary py-24'>
        <div className='container flex items-center justify-center text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-lg md:text-xl'
          >
            Gracias a esta visión y aplicando la tecnología para la producción
            de nuevas variedades, nos hemos convertido en los primeros en
            incursionar en la siembra de palta Hass fuera de su zona núcleo.{' '}
            <span className='bold text-accent'>
              Combinando la energía renovable con riego inteligente pudimos
              avanzar con este proyecto que sin dudas dará buenos frutos en un
              futuro cercano.
            </span>
          </motion.p>
        </div>
      </section>
    </>
  )
}

export default Tech
