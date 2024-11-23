'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import polo1 from '@/public/imgs/polo1.webp'
import polo2 from '@/public/imgs/polo2.webp'
import polo3 from '@/public/imgs/polo3.webp'
import palos from '@/public/imgs/palos.webp'

const Polo = () => {
  return (
    <>
      <section className='polo-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.h1
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center text-6xl font-bold md:text-8xl'
          >
            Polo
          </motion.h1>
        </div>
      </section>

      <section className='bg-secondary py-24'>
        <div className='container flex items-center justify-center text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            El polo en EL FARO nació como una
            <span className='text-accent'>
              {' '}
              necesidad inmediata de volcar al deporte nuestra cría de caballos.{' '}
            </span>{' '}
            Logramos con gran esfuerzo convertirnos un destino inigualable para
            la práctica del deporte, siendo un club oficial de la Asociación
            Argentina de Polo desde el año 2021.
          </motion.p>
        </div>
      </section>

      <section className='py-24'>
        <div className='container flex flex-col items-center gap-12'>
          <div className='flex gap-2 md:gap-12'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={polo1} alt='Jugadores de polo sobre el caballo' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={polo2} alt='Jugadores de polo sobre el caballo' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={polo3} alt='Jugadores de polo sobre el caballo' />
            </motion.div>
          </div>
          <div className='flex flex-col items-center'>
            <motion.h2
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='bold my-8 text-center text-3xl italic text-foreground md:w-2/3 md:text-4xl'
            >
              Contamos con las dos primeras canchas de polo en Argentina de
              bermuda Celebration
            </motion.h2>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center text-xl text-foreground md:w-2/3'
            >
              con medidas de 275 mts por 146 mts y todas las instalaciones para
              la alta competencia. Trabajando constantemente para la práctica
              segura del deporte, nuestras canchas se han diseñado sobre base de
              arena, cuidando cautelosamente los recursos naturales de EL FARO.
              El trabajo comprometido y detallista en el mantenimiento de las
              canchas se realiza durante todo el año.
            </motion.p>
          </div>
        </div>
      </section>

      <section className='flex flex-col md:flex-row'>
        <div className='flex-1'>
          <Image
            className='object-contain object-center'
            src={palos}
            alt='Cancha de polo'
          />
        </div>
        <div className='bold flex flex-1 flex-col items-center justify-center gap-8 bg-primary px-8 py-8 text-xl md:px-12 md:text-2xl'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Nuestro afán por mejorar y nuestra pasión por innovar nos llevó a
            tener las primeras canchas de polo del mundo con riego solar. La
            sustentabilidad y la ecología son valores innatos en EL FARO, y
            decidimos aplicar energía renovable para cuidar nuestras canchas y
            el medio ambiente.
          </motion.p>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ponemos lo mejor de nosotros en todos los eslabones necesarios para
            el correcto desarrollo del polo. Creemos que el deporte forja el
            espíritu, afianza amistades duraderas y genera equipos
            comprometidos.
          </motion.p>
        </div>
      </section>
    </>
  )
}

export default Polo
