'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import cria1 from '@/public/imgs/cria1.webp'
import cria2 from '@/public/imgs/cria2.webp'

const Cria = () => {
  return (
    <>
      <section className='cria-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.h1
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center text-6xl font-bold md:text-8xl'
          >
            Cría
          </motion.h1>
        </div>
      </section>

      <section className='bg-primary py-24'>
        <div className='container flex items-center justify-center text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            LA CRIA de la
            <span className='text-accent'> raza equina Polo Argentino</span> y
            la raza bovina Hereford, nos conduce a trabajar en cada detalle del
            proceso.
          </motion.p>
        </div>
      </section>

      <section className='py-24'>
        <div className='container'>
          <div className='mb-12 flex flex-col items-center gap-12 md:flex-row'>
            <motion.div
              initial={{ translateX: -50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={cria1} alt='ganado vacuno' />
            </motion.div>
            <motion.div
              initial={{ translateX: -50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='flex-1 md:px-16'
            >
              <p className='text-xl text-foreground md:text-2xl'>
                Trabajamos en cada etapa junto con nuestros equipos de
                ingenieros agrónomos y veterinarios, combinando la pasión por
                mejorar día a día nuestra genética. A través de la mejora
                nutricional, con inversiones sustentables en nuestros forrajes
                para las etapas de preñez, y el cuidado de cada animal desde su
                gestación, hemos logrado producir ejemplares de primer nivel.
              </p>
            </motion.div>
          </div>
          <div className='flex flex-col-reverse items-center gap-12 md:flex-row'>
            <motion.div
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='flex-1 md:px-16'
            >
              <p className='text-xl text-foreground md:text-2xl'>
                Haciendo una selección cuidadosa de nuestra cría junto a la
                Asociación Argentina Criadores de Hereford EL FARO se ha
                convertido en un referente en la zona por sus Toros y
                Vaquillonas Puro Registrado, afianzando la raza y logrando
                planteles de gran categoría.
              </p>
            </motion.div>
            <motion.div
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={cria2} alt='ganado vacuno' />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='manada-bg flex min-h-screen items-end justify-center'
      >
        <div className='overlay flex justify-center p-8 md:px-16 md:py-12'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-center text-xl md:w-4/5 md:text-2xl'
          >
            El manejo de las manadas de caballos, combinando genética a través
            de embriones y con un cuidado sanitario permanente, nos ha permitido
            lograr{' '}
            <span className='text-accent'>animales de alta competencia.</span>{' '}
            Con la dedicación permanente de los veterinarios y nuestros audaces
            domadores y pilotos, hemos cubierto todas las etapas de la cría de
            Polo Argentino, entregando a doma y hechura{' '}
            <span className='text-accent'>futuros campeones.</span>
          </motion.p>
        </div>
      </motion.section>

      <section className='bg-secondary py-24'>
        <div className='container flex justify-center'>
          <motion.p
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='light text-center text-2xl italic md:w-2/3 md:text-4xl'
          >
            Estamos orgullosos del arduo trabajo de toda la gente que integra
            este <span className='bold'>gran equipo.</span>
          </motion.p>
        </div>
      </section>
    </>
  )
}

export default Cria
