'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, MessageCircle } from 'lucide-react'

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setVideoLoaded(true)
  }

  const scrollToServices = () => {
    const element = document.querySelector('#servicos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da PQD Informática.', '_blank')
  }

  return (
    <section id="home" className="hero-section relative">
      {/* Video Background */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`hero-video transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster="/hero-fallback.jpg"
        >
          <source 
            src="https://mbluxury1.s3.amazonaws.com/2020/09/18141509/home-video-2020.mp4" 
            type="video/mp4" 
          />
        </video>
      )}

      {/* Fallback Background Image */}
      {videoError && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(46, 139, 87, 0.7) 100%), url("/hero-fallback.jpg")'
          }}
        />
      )}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="heading-1 text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformamos Ideias em
            <span className="block text-gradient bg-gradient-to-r from-secondary-green-light to-secondary-blue-light bg-clip-text text-transparent">
              Soluções Tecnológicas
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Há mais de 10 anos oferecendo soluções completas em TI, 
            cursos especializados e produtos inovadores para impulsionar 
            seu negócio no mundo digital.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 mb-10 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-green-light rounded-full"></div>
              <span className="text-sm font-medium">+500 Clientes Atendidos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-blue-light rounded-full"></div>
              <span className="text-sm font-medium">+1000 Projetos Entregues</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-green-light rounded-full"></div>
              <span className="text-sm font-medium">Suporte 24/7</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* WhatsApp CTA */}
            <motion.button
              onClick={openWhatsApp}
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl min-w-[200px] justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span>Fale Conosco</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              onClick={scrollToServices}
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-3 min-w-[200px] justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5" />
              <span>Nossos Serviços</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Loading Overlay */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-green flex items-center justify-center z-20">
          <div className="text-center text-white">
            <div className="loading-spinner mx-auto mb-4"></div>
            <p className="text-lg font-medium">Carregando experiência...</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeroSection