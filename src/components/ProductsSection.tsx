'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShoppingCart, 
  Eye,
  Zap,
  Shield,
  Cpu,
  Monitor,
  Wifi,
  HardDrive
} from 'lucide-react'

const ProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'software', name: 'Software' },
    { id: 'networking', name: 'Redes' },
    { id: 'security', name: 'Segurança' }
  ]

  const products = [
    {
      id: 1,
      name: 'Sistema de Gestão Empresarial',
      category: 'software',
      price: 'R$ 299/mês',
      originalPrice: 'R$ 399/mês',
      image: '/products/erp-system.jpg',
      rating: 4.9,
      reviews: 127,
      icon: Cpu,
      description: 'Sistema completo para gestão empresarial com módulos integrados de vendas, estoque, financeiro e RH.',
      features: ['Gestão Completa', 'Relatórios Avançados', 'Integração Bancária', 'Suporte 24/7'],
      badge: 'Mais Vendido'
    },
    {
      id: 2,
      name: 'Servidor Dell PowerEdge',
      category: 'hardware',
      price: 'R$ 8.999',
      originalPrice: 'R$ 10.999',
      image: '/products/server.jpg',
      rating: 4.8,
      reviews: 89,
      icon: HardDrive,
      description: 'Servidor robusto para pequenas e médias empresas com alta performance e confiabilidade.',
      features: ['Intel Xeon', '32GB RAM', '2TB SSD', 'Garantia 3 anos'],
      badge: 'Oferta Especial'
    },
    {
      id: 3,
      name: 'Solução de Backup em Nuvem',
      category: 'software',
      price: 'R$ 149/mês',
      originalPrice: 'R$ 199/mês',
      image: '/products/cloud-backup.jpg',
      rating: 4.7,
      reviews: 203,
      icon: Shield,
      description: 'Backup automático e seguro na nuvem com criptografia avançada e recuperação rápida.',
      features: ['Backup Automático', 'Criptografia AES-256', 'Recuperação Rápida', 'Armazenamento Ilimitado'],
      badge: 'Recomendado'
    },
    {
      id: 4,
      name: 'Switch Gerenciável 24 Portas',
      category: 'networking',
      price: 'R$ 1.299',
      originalPrice: 'R$ 1.599',
      image: '/products/switch.jpg',
      rating: 4.6,
      reviews: 156,
      icon: Wifi,
      description: 'Switch gerenciável com 24 portas Gigabit para redes corporativas de alta performance.',
      features: ['24 Portas Gigabit', 'VLAN Support', 'QoS Avançado', 'Interface Web'],
      badge: 'Novo'
    },
    {
      id: 5,
      name: 'Firewall Next Generation',
      category: 'security',
      price: 'R$ 2.499',
      originalPrice: 'R$ 2.999',
      image: '/products/firewall.jpg',
      rating: 4.9,
      reviews: 94,
      icon: Shield,
      description: 'Firewall de nova geração com proteção avançada contra ameaças e controle de aplicações.',
      features: ['Deep Packet Inspection', 'IPS/IDS Integrado', 'VPN SSL', 'Relatórios Detalhados'],
      badge: 'Premium'
    },
    {
      id: 6,
      name: 'Workstation Profissional',
      category: 'hardware',
      price: 'R$ 4.999',
      originalPrice: 'R$ 5.999',
      image: '/products/workstation.jpg',
      rating: 4.8,
      reviews: 67,
      icon: Monitor,
      description: 'Workstation de alta performance para desenvolvimento, design e análise de dados.',
      features: ['Intel i9', '64GB RAM', 'RTX 4070', 'SSD 1TB NVMe'],
      badge: 'Performance'
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProducts.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredProducts.length / 3)) % Math.ceil(filteredProducts.length / 3))
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Mais Vendido': return 'bg-red-500'
      case 'Oferta Especial': return 'bg-orange-500'
      case 'Recomendado': return 'bg-green-500'
      case 'Novo': return 'bg-blue-500'
      case 'Premium': return 'bg-purple-500'
      case 'Performance': return 'bg-indigo-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <section id="produtos" className="py-20 bg-white dark:bg-gray-900">
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
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Selecionamos os melhores produtos de tecnologia para atender 
            às necessidades específicas do seu negócio.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id)
                setCurrentSlide(0)
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-green text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            disabled={filteredProducts.length <= 3}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            disabled={filteredProducts.length <= 3}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${currentSlide}`}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProducts
                  .slice(currentSlide * 3, (currentSlide + 1) * 3)
                  .map((product, index) => {
                    const IconComponent = product.icon
                    return (
                      <motion.div
                        key={product.id}
                        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                      >
                        {/* Product Image */}
                        <div className="relative h-48 bg-gradient-to-br from-primary-blue to-primary-green flex items-center justify-center overflow-hidden">
                          <IconComponent className="w-20 h-20 text-white/80" />
                          
                          {/* Badge */}
                          <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                            {product.badge}
                          </div>

                          {/* Hover Actions */}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                            <motion.button
                              className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Eye className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                              className="bg-primary-green text-white p-3 rounded-full hover:bg-secondary-green-light transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ShoppingCart className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                          {/* Rating */}
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {product.rating} ({product.reviews} avaliações)
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-semibold text-secondary-gray-dark dark:text-white mb-3 group-hover:text-primary-green dark:group-hover:text-secondary-green-light transition-colors">
                            {product.name}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                            {product.description}
                          </p>

                          {/* Features */}
                          <div className="grid grid-cols-2 gap-2 mb-6">
                            {product.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <Zap className="w-3 h-3 text-primary-green flex-shrink-0" />
                                <span className="text-xs text-gray-600 dark:text-gray-400">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Price */}
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <span className="text-2xl font-bold text-primary-green">
                                {product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  {product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.button
                            className="w-full bg-gradient-to-r from-primary-green to-secondary-green-light text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open(`https://wa.me/5511999999999?text=Gostaria de saber mais sobre ${product.name}`, '_blank')}
                          >
                            Solicitar Orçamento
                          </motion.button>
                        </div>
                      </motion.div>
                    )
                  })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          {filteredProducts.length > 3 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.ceil(filteredProducts.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-primary-green scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Precisa de um produto específico? Entre em contato conosco!
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://wa.me/5511999999999?text=Gostaria de informações sobre produtos específicos', '_blank')}
          >
            Ver Catálogo Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection