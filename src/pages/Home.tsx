import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedCounter from '../components/AnimatedCounter'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import PortfolioCard from '../components/PortfolioCard'
import NewsletterSignup from '../components/NewsletterSignup'
import { 
  Code2, 
  Cloud
} from 'lucide-react'

const Home = () => {
  const stats = [
    { value: 250, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Success Rate' },
    { value: 150, suffix: '+', label: 'Happy Clients' },
    { value: 15, suffix: '+', label: 'Years Experience' },
  ]

  const services = [
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital strategies and technologies.',
    },
    {
      icon: Code2,
      title: 'Custom Software',
      description: 'Tailored software solutions built to solve your unique business challenges.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for your growing business.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp',
      rating: 5,
      text: 'Optimal Solutions transformed our legacy systems into a modern, cloud-based infrastructure. Their expertise and professionalism are unmatched.',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Michael Chen',
      position: 'CEO',
      company: 'InnovateLabs',
      rating: 5,
      text: 'Working with Optimal Solutions was a game-changer for our business. They delivered beyond our expectations and on time.',
      avatar: 'https://i.pravatar.cc/150?img=13',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Director',
      company: 'GlobalTech',
      rating: 5,
      text: 'The team\'s attention to detail and commitment to excellence is remarkable. They truly understand what it takes to build world-class products.',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  ]

  const portfolioHighlights = [
    {
      id: '1',
      title: 'E-Commerce Platform Redesign',
      client: 'RetailCo',
      industry: 'Retail',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      id: '2',
      title: 'Healthcare Management System',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    },
    {
      id: '3',
      title: 'Financial Analytics Dashboard',
      client: 'FinanceHub',
      industry: 'Finance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Django', 'Redis', 'Kubernetes'],
    },
  ]

  const clientLogos = [
    'TechCorp', 'InnovateLabs', 'GlobalTech', 'RetailCo', 'MediCare', 'FinanceHub'
  ]

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-primary-600/20 border border-primary-400/30 text-primary-300 rounded-full text-sm font-medium">
                Innovation Meets Excellence
              </span>
            </motion.div>

            <h1 className="heading-xl text-white mb-6">
              Creating Optimal Solutions for{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Complex Challenges
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We transform businesses through innovative technology, strategic thinking, and exceptional execution. 
              Partner with us to unlock your full digital potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4 text-navy-900 dark:text-gray-100">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions tailored to drive your business forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4 text-navy-900 dark:text-gray-100">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Success stories from our diverse portfolio of transformative projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project) => (
              <PortfolioCard
                key={project.id}
                title={project.title}
                client={project.client}
                industry={project.industry}
                image={project.image}
                technologies={project.technologies}
                onClick={() => {}}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View All Projects
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-lg mb-6 text-navy-900 dark:text-gray-100">
                Why Choose Optimal Solutions?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                We combine deep technical expertise with business acumen to deliver solutions 
                that not only work flawlessly but also drive real business value.
              </p>

              <div className="space-y-4">
                {[
                  'Proven track record with 250+ successful projects',
                  'Expert team with 15+ years of combined experience',
                  'Agile methodology ensuring flexibility and transparency',
                  'Dedicated support throughout and beyond project delivery',
                  'Cutting-edge technologies and best practices',
                  'Competitive pricing with no hidden costs',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: TrendingUp, title: 'Growth Focused', color: 'from-blue-600 to-blue-400' },
                { icon: Users, title: 'Client-Centric', color: 'from-purple-600 to-purple-400' },
                { icon: Award, title: 'Award Winning', color: 'from-green-600 to-green-400' },
                { icon: Zap, title: 'Agile & Fast', color: 'from-orange-600 to-orange-400' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-navy-900 dark:text-gray-100">{item.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4 text-navy-900 dark:text-gray-100">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 font-medium">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((logo) => (
              <div key={logo} className="text-center font-bold text-gray-400 dark:text-gray-500 text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <NewsletterSignup />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with optimal solutions.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home

