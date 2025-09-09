'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User, Tag, Eye } from 'lucide-react'
import Image from 'next/image'

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Como a Inteligência Artificial está Transformando os Negócios em 2024',
      excerpt: 'Descubra as principais tendências de IA que estão revolucionando o mercado e como sua empresa pode se beneficiar dessas tecnologias.',
      author: 'Dr. Ricardo Santos',
      authorRole: 'Especialista em IA',
      date: '15 de Janeiro, 2024',
      readTime: '8 min',
      category: 'Inteligência Artificial',
      image: '/blog/ai-business-2024.jpg',
      views: 1247,
      featured: true,
      tags: ['IA', 'Automação', 'Negócios', 'Tecnologia']
    },
    {
      id: 2,
      title: 'Segurança Cibernética: Protegendo sua Empresa contra Ameaças Digitais',
      excerpt: 'Estratégias essenciais para manter seus dados seguros e proteger sua empresa contra ataques cibernéticos cada vez mais sofisticados.',
      author: 'Ana Paula Costa',
      authorRole: 'Especialista em Segurança',
      date: '12 de Janeiro, 2024',
      readTime: '6 min',
      category: 'Segurança',
      image: '/blog/cybersecurity-2024.jpg',
      views: 892,
      featured: false,
      tags: ['Segurança', 'Firewall', 'Proteção', 'Dados']
    },
    {
      id: 3,
      title: 'Cloud Computing: Vantagens da Migração para a Nuvem',
      excerpt: 'Entenda os benefícios da computação em nuvem e como planejar uma migração segura e eficiente para sua infraestrutura.',
      author: 'Carlos Eduardo',
      authorRole: 'Arquiteto de Soluções',
      date: '10 de Janeiro, 2024',
      readTime: '7 min',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration.jpg',
      views: 1156,
      featured: false,
      tags: ['Cloud', 'Migração', 'Infraestrutura', 'AWS']
    },
    {
      id: 4,
      title: 'Transformação Digital: Guia Completo para PMEs',
      excerpt: 'Um roadmap prático para pequenas e médias empresas implementarem a transformação digital de forma estratégica e sustentável.',
      author: 'Marina Silva',
      authorRole: 'Consultora Digital',
      date: '8 de Janeiro, 2024',
      readTime: '10 min',
      category: 'Transformação Digital',
      image: '/blog/digital-transformation.jpg',
      views: 2103,
      featured: true,
      tags: ['Digital', 'PME', 'Estratégia', 'Inovação']
    },
    {
      id: 5,
      title: 'Automação de Processos: Aumentando a Eficiência Operacional',
      excerpt: 'Como identificar processos que podem ser automatizados e implementar soluções que aumentem a produtividade da sua equipe.',
      author: 'Roberto Oliveira',
      authorRole: 'Especialista em Automação',
      date: '5 de Janeiro, 2024',
      readTime: '5 min',
      category: 'Automação',
      image: '/blog/process-automation.jpg',
      views: 743,
      featured: false,
      tags: ['Automação', 'Processos', 'Eficiência', 'RPA']
    },
    {
      id: 6,
      title: 'Backup e Recuperação: Estratégias para Proteção de Dados',
      excerpt: 'Melhores práticas para implementar uma estratégia robusta de backup e garantir a continuidade dos negócios.',
      author: 'Fernando Almeida',
      authorRole: 'Especialista em Backup',
      date: '3 de Janeiro, 2024',
      readTime: '6 min',
      category: 'Backup',
      image: '/blog/backup-strategies.jpg',
      views: 654,
      featured: false,
      tags: ['Backup', 'Recuperação', 'Dados', 'Continuidade']
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const getCategoryColor = (category: string) => {
    const colors = {
      'Inteligência Artificial': 'bg-purple-500',
      'Segurança': 'bg-red-500',
      'Cloud Computing': 'bg-blue-500',
      'Transformação Digital': 'bg-green-500',
      'Automação': 'bg-orange-500',
      'Backup': 'bg-indigo-500'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
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
            Nosso <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fique por dentro das últimas tendências em tecnologia e 
            aprenda com nossos especialistas.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold text-secondary-gray-dark dark:text-white mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Artigos em Destaque
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary-green to-secondary-green-light text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </div>

                  {/* Post Image */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-blue to-primary-green overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`inline-block ${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                        {post.category}
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString('pt-BR')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-secondary-gray-dark dark:text-white mb-3 group-hover:text-primary-green dark:group-hover:text-secondary-green-light transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-secondary-gray-dark dark:text-white">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {post.authorRole}
                          </p>
                        </div>
                      </div>

                      <motion.button
                        className="flex items-center space-x-2 text-primary-green hover:text-secondary-green-light transition-colors font-medium"
                        whileHover={{ x: 5 }}
                      >
                        <span>Ler mais</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-secondary-gray-dark dark:text-white mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Artigos Recentes
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Post Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-blue to-primary-green overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className={`${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-secondary-gray-dark dark:text-white mb-3 group-hover:text-primary-green dark:group-hover:text-secondary-green-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author & Views */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    className="w-full bg-gray-50 dark:bg-gray-700 hover:bg-primary-green hover:text-white dark:hover:bg-primary-green text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Ler Artigo</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-green to-secondary-green-light rounded-3xl p-8 lg:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Receba nossos artigos por email
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Fique por dentro das últimas novidades em tecnologia
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              className="bg-white text-primary-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Inscrever-se
            </motion.button>
          </div>
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
            Quer ver todos os nossos artigos?
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Blog Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection