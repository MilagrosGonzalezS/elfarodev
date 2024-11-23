'use client'
import { motion } from 'motion/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import image1 from '@/public/imgs/nosotros.webp'
import image2 from '@/public/imgs/nosotros.webp'
import image3 from '@/public/imgs/nosotros.webp'
import Image from 'next/image'
import hereford from '@/public/imgs/hereford.webp'
import aap from '@/public/imgs/aap.webp'
import panels from '@/public/imgs/panels.webp'

const About = () => {
  return (
    <>
      <section className='about-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.h1
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center text-6xl font-bold md:text-8xl'
          >
            Nosotros
          </motion.h1>
        </div>
      </section>

      <section className='bg-secondary py-24'>
        <div className='container flex flex-col items-center justify-center gap-8 text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            El FARO es un{' '}
            <span className='text-accent'>equipo de profesionales</span>{' '}
            dedicados a la permanente búsqueda de la excelencia, aplicando
            conocimientos e innovación en cada actividad que se realiza.
          </motion.p>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            El objetivo inicial fue{' '}
            <span className='text-accent'>
              lograr un establecimiento para cría de equinos y bovinos,
            </span>{' '}
            enfocándonos en la raza Polo Argentino y también en la raza
            Hereford. Trabajando siempre con altos estándares en el cuidado
            animal, la nutrición y la mejora genética.
          </motion.p>
        </div>
      </section>

      <section className='py-24'>
        <div className='container flex flex-col-reverse gap-12 md:flex-row'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='flex flex-1 items-center justify-center'
          >
            <Carousel
              opts={{
                align: 'start',
                loop: true
              }}
              plugins={[
                Autoplay({
                  delay: 5000
                })
              ]}
              className='w-96'
            >
              <CarouselContent>
                <CarouselItem>
                  <div className='w-full p-1'>
                    <Image
                      className='w-full object-cover'
                      src={image1}
                      alt='Camiseta de El Faro Polo de atrás'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='p-1'>
                    <Image
                      className='w-full object-cover'
                      src={image2}
                      alt=''
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='p-1'>
                    <Image
                      className='w-full object-cover'
                      src={image3}
                      alt=''
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </motion.div>
          <div className='flex flex-1 flex-col items-center justify-center md:px-16'>
            <div className='mb-16 flex flex-col items-center gap-24 md:flex-row md:items-end'>
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-44'
              >
                <Image src={hereford} alt='Hereford logo' />
              </motion.div>
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className='w-32'
              >
                <Image src={aap} alt='AAP logo' />
              </motion.div>
            </div>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='text-center text-lg text-foreground'
            >
              En la constante búsqueda por mejorar ambas actividades, trabajamos
              estrechamente con la AACH (Asociación Argentina Criadores de
              Hereford) y también hemos destinado un área para el desarrollo del
              Polo, siendo hoy El Faro un club oficial de la AAP (Asociación
              Argentina de Polo).
            </motion.p>
          </div>
        </div>
      </section>

      <section className='bg-primary py-24'>
        <div className='container flex flex-col justify-evenly gap-8 md:flex-row'>
          <div className='flex flex-1 flex-col'>
            <motion.span
              initial={{ translateX: -20, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='light text-3xl'
            >
              NUESTRO
            </motion.span>
            <motion.h3
              initial={{ translateX: -20, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-8xl'
            >
              desafío
            </motion.h3>
          </div>
          <div className='flex-1'>
            <motion.p
              initial={{ translateX: 20, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-2xl'
            >
              Mejorar el suelo arenoso existente para lograr una oferta
              forrajera a medida de la calidad de nuestros planteles. Se trabaja
              con gran dedicación en verdeos y pasturas para lograr la correcta
              nutrición.
            </motion.p>
          </div>
        </div>
      </section>

      <section className='field-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center px-8'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-center text-2xl md:w-2/3'
          >
            Con el mismo ánimo y pasión que nos caracteriza desde el origen de
            EL FARO, también incursionamos en la producción de palta en su
            variedad Hass.{' '}
            <span className='text-accent'>
              Somos el único establecimiento en la zona que ha aplicado el
              trabajo de un gran equipo para innovar en sus cultivos,{' '}
            </span>
            logrando una vez más marcar el camino de la búsqueda constante de la
            excelencia productiva.
          </motion.p>
        </div>
      </section>

      <section className='py-24'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src={panels} alt='' />
          </motion.div>
          <div className='flex gap-32 py-12 text-xl text-foreground'>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              La <span className='bold italic'>tecnología</span> es una
              herramienta en la cual nos apoyamos constantemente, utilizándola
              como base del crecimiento a largo plazo.{' '}
              <span className='bold italic'>
                Nuestra misión es ser sustentables
              </span>{' '}
              en el tiempo, protegiendo cuidadosamente el medioambiente.
            </motion.p>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className='bold italic'>
                La generación de energía renovable,
              </span>{' '}
              utilizando los más modernos instrumentos, nos ha permitido dar un
              paso hacia un futuro prometedor para las{' '}
              <span className='bold italic'>
                mejoras continuas de nuestros recursos naturales.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      <section className='nosotros-bg'>
        <div className='overlay flex w-full items-center justify-center px-8 py-24 xl:py-32'>
          <motion.h4
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='light w-2/3 text-center text-4xl italic'
          >
            Somos sinónimo de pasión, innovación, trabajo en equipo y cuidado
            del medio ambiente.
          </motion.h4>
        </div>
      </section>
    </>
  )
}

export default About
