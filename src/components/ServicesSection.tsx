'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Shield, 
  Cloud, 
  Smartphone, 
  Database, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Software',
      description: 'Criamos soluções personalizadas para web, mobile e desktop que atendem às necessidades específicas do seu negócio.',
      features: ['Aplicações Web Responsivas', 'Apps Mobile Nativos', 'Sistemas Desktop', 'APIs e Integrações'],
      color: 'from-primary-blue to-secondary-blue-light'
    },
    {
      icon: Shield,
      title: 'Segurança da Informação',
      description: 'Protegemos seus dados e sistemas com as melhores práticas de segurança cibernética do mercado.',
      features: ['Auditoria de Segurança', 'Firewall e Antivírus', 'Backup Automatizado', 'Monitoramento 24/7'],
      color: 'from-primary-green to-secondary-green-light'
    },
    {
      icon: Cloud,
      title: 'Infraestrutura em Nuvem',
      description: 'Migração e gerenciamento de infraestrutura em nuvem para maior escalabilidade e eficiência.',
      features: ['AWS e Azure', 'Migração Segura', 'Otimização de Custos', 'Monitoramento Contínuo'],
      color: 'from-secondary-blue-light to-primary-blue'
    },
    {
      icon: Smartphone,
      title: 'Transformação Digital',
      description: 'Modernizamos processos empresariais através de tecnologias inovadoras e automação inteligente.',
      features: ['Automação de Processos', 'Digitalização de Documentos', 'Workflow Inteligente', 'Analytics Avançado'],
      color: 'from-secondary-green-light to-primary-green'
    },
    {
      icon: Database,
      title: 'Gestão de Dados',
      description: 'Organizamos, protegemos e otimizamos seus dados para tomadas de decisão mais assertivas.',
      features: ['Business Intelligence', 'Data Analytics', 'Banco de Dados', 'Relatórios Personalizados'],
      color: 'from-primary-blue to-primary-green'
    },
    {
      icon: Headphones,
      title: 'Suporte Técnico',
      description: 'Suporte especializado 24/7 para garantir que seus sistemas funcionem sempre com máxima eficiência.',
      features: ['Suporte 24/7', 'Manutenção Preventiva', 'Help Desk', 'Treinamento de Equipes'],
      color: 'from-primary-green to-secondary-blue-light'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="servicos" className="py-20 bg-support-gray-light dark:bg-dark-bg">
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
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em tecnologia da informação para 
            impulsionar o crescimento e a eficiência do seu negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-primary-green dark:hover:border-secondary-green-light"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="heading-3 text-secondary-gray-dark dark:text-white mb-4 group-hover:text-primary-green dark:group-hover:text-secondary-green-light transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className="group/btn w-full bg-gradient-to-r from-primary-green to-secondary-green-light text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://wa.me/5511999999999?text=Gostaria de saber mais sobre ' + service.title, '_blank')}
                >
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Não encontrou o que procura? Temos soluções personalizadas para cada necessidade.
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://wa.me/5511999999999?text=Gostaria de uma consultoria personalizada', '_blank')}
          >
            Solicitar Consultoria Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection