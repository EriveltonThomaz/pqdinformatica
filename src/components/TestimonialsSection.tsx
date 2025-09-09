'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Image from 'next/image'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Eduardo Silva',
      position: 'CEO',
      company: 'TechStart Soluções',
      avatar: '/testimonials/carlos.jpg',
      rating: 5,
      text: 'A PQD Informática transformou completamente nossa infraestrutura de TI. O suporte é excepcional e as soluções são sempre inovadoras. Recomendo sem hesitar!',
      project: 'Implementação de ERP Completo',
      results: ['Aumento de 40% na produtividade', 'Redução de 60% nos custos operacionais', 'Integração total dos processos']
    },
    {
      id: 2,
      name: 'Marina Santos',
      position: 'Diretora de TI',
      company: 'Grupo Empresarial ABC',
      avatar: '/testimonials/marina.jpg',
      rating: 5,
      text: 'Parceria de mais de 5 anos com a PQD. Sempre entregam soluções de qualidade no prazo. A equipe é altamente qualificada e o atendimento é personalizado.',
      project: 'Migração para Nuvem Híbrida',
      results: ['99.9% de uptime', 'Economia de 50% em infraestrutura', 'Escalabilidade automática']
    },
    {
      id: 3,
      name: 'Roberto Oliveira',
      position: 'Gerente Geral',
      company: 'Indústria MetalTech',
      avatar: '/testimonials/roberto.jpg',
      rating: 5,
      text: 'O sistema de gestão implementado pela PQD revolucionou nossa operação. Controle total da produção, estoque e vendas em uma única plataforma.',
      project: 'Sistema de Gestão Industrial',
      results: ['Controle total da produção', 'Redução de 30% no desperdício', 'Relatórios em tempo real']
    },
    {
      id: 4,
      name: 'Ana Paula Costa',
      position: 'Proprietária',
      company: 'Clínica Vida & Saúde',
      avatar: '/testimonials/ana.jpg',
      rating: 5,
      text: 'Sistema médico completo e intuitivo. A digitalização dos prontuários e agendamento online melhorou muito o atendimento aos nossos pacientes.',
      project: 'Sistema de Gestão Médica',
      results: ['Prontuários 100% digitais', 'Agendamento online', 'Satisfação dos pacientes +95%']
    },
    {
      id: 5,
      name: 'Fernando Almeida',
      position: 'Diretor Comercial',
      company: 'Distribuidora Nacional',
      avatar: '/testimonials/fernando.jpg',
      rating: 5,
      text: 'A automação do processo de vendas e a integração com nossos fornecedores aumentou significativamente nossa eficiência operacional.',
      project: 'Automação Comercial Completa',
      results: ['Vendas automatizadas', 'Integração com fornecedores', 'Aumento de 35% no faturamento']
    },
    {
      id: 6,
      name: 'Juliana Rodrigues',
      position: 'Coordenadora de TI',
      company: 'Escola Futuro Brilhante',
      avatar: '/testimonials/juliana.jpg',
      rating: 5,
      text: 'Plataforma educacional completa que conecta alunos, professores e pais. O suporte técnico é sempre rápido e eficiente.',
      project: 'Plataforma Educacional Digital',
      results: ['Ensino 100% digital', 'Comunicação integrada', 'Gestão acadêmica completa']
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 text-secondary-gray-dark dark:text-white mb-6">
            O que nossos <span className="text-gradient">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mais de 500 empresas confiam em nossas soluções. 
            Veja os resultados que alcançamos juntos.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <button
              onClick={toggleAutoPlay}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                isAutoPlay 
                  ? 'bg-primary-green text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {isAutoPlay ? 'Pausar' : 'Reproduzir'}
              </span>
            </button>
          </div>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Testimonial Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-primary-green opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary-blue to-primary-green flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-gray-dark dark:text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentTestimonial].position}
                      </p>
                      <p className="text-primary-green font-medium">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Project Results */}
                <div className="bg-gradient-to-br from-primary-green/5 to-secondary-green-light/5 dark:from-primary-green/10 dark:to-secondary-green-light/10 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-secondary-gray-dark dark:text-white mb-4">
                    Projeto Realizado
                  </h3>
                  
                  <p className="text-lg text-primary-green font-semibold mb-6">
                    {testimonials[currentTestimonial].project}
                  </p>

                  <h4 className="text-lg font-semibold text-secondary-gray-dark dark:text-white mb-4">
                    Resultados Alcançados:
                  </h4>

                  <ul className="space-y-3">
                    {testimonials[currentTestimonial].results.map((result, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary-green rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {result}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-8 bg-gradient-to-r from-primary-green to-secondary-green-light text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg self-start"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(`https://wa.me/5511999999999?text=Gostaria de saber mais sobre o projeto ${testimonials[currentTestimonial].project}`, '_blank')}
                  >
                    Quero um Projeto Assim
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'w-12 h-3 bg-primary-green rounded-full'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { number: '500+', label: 'Clientes Atendidos' },
            { number: '98%', label: 'Satisfação' },
            { number: '15+', label: 'Anos de Experiência' },
            { number: '24/7', label: 'Suporte Técnico' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-green mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Quer ser nosso próximo caso de sucesso?
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://wa.me/5511999999999?text=Gostaria de conversar sobre um projeto para minha empresa', '_blank')}
          >
            Iniciar Meu Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection