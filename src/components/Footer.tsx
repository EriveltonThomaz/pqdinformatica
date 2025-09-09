'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowRight,
  Shield,
  Award,
  Users,
  Zap
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Desenvolvimento de Software', href: '#servicos' },
    { name: 'Consultoria em TI', href: '#servicos' },
    { name: 'Suporte Técnico', href: '#servicos' },
    { name: 'Cloud Computing', href: '#servicos' },
    { name: 'Segurança Digital', href: '#servicos' },
    { name: 'Backup e Recuperação', href: '#servicos' }
  ]

  const products = [
    { name: 'Sistema ERP', href: '#produtos' },
    { name: 'CRM Empresarial', href: '#produtos' },
    { name: 'E-commerce', href: '#produtos' },
    { name: 'Aplicativos Mobile', href: '#produtos' },
    { name: 'Sites Institucionais', href: '#produtos' },
    { name: 'Sistemas Personalizados', href: '#produtos' }
  ]

  const company = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Nossa Equipe', href: '#equipe' },
    { name: 'Casos de Sucesso', href: '#depoimentos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Carreiras', href: '#carreiras' },
    { name: 'Contato', href: '#contato' }
  ]

  const legal = [
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Política de Cookies', href: '/cookies' },
    { name: 'LGPD', href: '/lgpd' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/pqdinformatica', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/pqdinformatica', name: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/pqdinformatica', name: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/pqdinformatica', name: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com/pqdinformatica', name: 'Twitter' }
  ]

  const certifications = [
    { name: 'ISO 27001', description: 'Segurança da Informação' },
    { name: 'Microsoft Partner', description: 'Parceiro Certificado' },
    { name: 'AWS Partner', description: 'Soluções em Nuvem' },
    { name: 'Google Partner', description: 'Tecnologias Google' }
  ]

  return (
    <footer className="bg-secondary-gray-dark dark:bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gradient mb-2">
                PQD Informática
              </h3>
              <p className="text-gray-300">
                Soluções tecnológicas que transformam negócios
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Rua das Tecnologias, 123<br />
                    Centro Empresarial - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-green flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(11) 3456-7890</p>
                  <p className="text-gray-300">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-green flex-shrink-0" />
                <p className="text-gray-300">contato@pqdinformatica.com.br</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-green flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Seg - Sex: 8h às 18h</p>
                  <p className="text-gray-300">Suporte 24/7 disponível</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-primary-green p-3 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-primary-green">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white hover:text-primary-green transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-primary-green">
              Produtos
            </h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-gray-300 hover:text-white hover:text-primary-green transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-primary-green">
              Empresa
            </h4>
            <ul className="space-y-3 mb-8">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:text-primary-green transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 text-primary-green">
              Legal
            </h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:text-primary-green transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Receba nossas <span className="text-gradient">novidades</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Fique por dentro das últimas tendências em tecnologia e 
                receba conteúdo exclusivo diretamente no seu email.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
              />
              <motion.button
                className="bg-gradient-to-r from-primary-green to-secondary-green-light text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Inscrever-se
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-semibold mb-6 text-center">
            Certificações e Parcerias
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-green to-secondary-green-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-white mb-1">{cert.name}</h5>
                <p className="text-sm text-gray-400">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: '500+', label: 'Clientes Atendidos' },
              { icon: Shield, number: '15+', label: 'Anos de Experiência' },
              { icon: Zap, number: '1000+', label: 'Projetos Entregues' },
              { icon: Award, number: '98%', label: 'Satisfação do Cliente' }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-secondary-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-green mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>
                © {currentYear} PQD Informática. Todos os direitos reservados.
              </p>
              <p className="text-sm mt-1">
                CNPJ: 12.345.678/0001-90 | Desenvolvido com ❤️ pela equipe PQD
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/sitemap" className="hover:text-primary-green transition-colors">
                Mapa do Site
              </Link>
              <Link href="/acessibilidade" className="hover:text-primary-green transition-colors">
                Acessibilidade
              </Link>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary-green" />
                <span>Site Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da PQD Informática.', '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors duration-300 flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0.7)",
              "0 0 0 10px rgba(34, 197, 94, 0)",
              "0 0 0 0 rgba(34, 197, 94, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
          </svg>
        </motion.button>
      </motion.div>
    </footer>
  )
}

export default Footer