import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { 
  Zap, 
  Code2, 
  Cloud, 
  BarChart3, 
  Palette, 
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface Service {
  id: string
  icon: any
  title: string
  shortDescription: string
  fullDescription: string
  keyBenefits: string[]
  deliverables: string[]
  technologies: string[]
  pricingTier: string
}

const Services = () => {

  const services: Service[] = [
    {
      id: 'digital-transformation',
      icon: Zap,
      title: 'Digital Transformation Consulting',
      shortDescription: 'Modernize your business with cutting-edge digital strategies and technologies.',
      fullDescription: 'Navigate the complexities of digital transformation with our expert guidance. We help organizations reimagine their business models, processes, and customer experiences through strategic technology adoption and change management.',
      keyBenefits: [
        'Comprehensive digital strategy development',
        'Technology stack modernization',
        'Process automation and optimization',
        'Change management and training',
        'ROI-focused implementation roadmap',
        'Competitive advantage through innovation',
      ],
      deliverables: [
        'Digital transformation roadmap',
        'Technology assessment report',
        'Implementation strategy',
        'Change management plan',
        'Training materials and sessions',
        'Success metrics dashboard',
      ],
      technologies: ['Cloud Platforms', 'AI/ML', 'IoT', 'Blockchain', 'Analytics', 'Automation Tools'],
      pricingTier: 'Enterprise',
    },
    {
      id: 'software-development',
      icon: Code2,
      title: 'Custom Software Development',
      shortDescription: 'Tailored software solutions built to solve your unique business challenges.',
      fullDescription: 'From concept to deployment, we build robust, scalable custom software solutions that perfectly align with your business objectives. Our agile development process ensures flexibility, transparency, and rapid delivery.',
      keyBenefits: [
        'Fully customized to your requirements',
        'Scalable and maintainable architecture',
        'Agile development methodology',
        'Continuous integration and deployment',
        'Comprehensive testing and QA',
        'Post-launch support and maintenance',
      ],
      deliverables: [
        'Custom application development',
        'API design and implementation',
        'Database design and optimization',
        'Technical documentation',
        'Source code and deployment packages',
        'User training and support materials',
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'Mobile (iOS/Android)'],
      pricingTier: 'Custom',
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions & Architecture',
      shortDescription: 'Scalable cloud infrastructure and migration services for your growing business.',
      fullDescription: 'Leverage the power of cloud computing to improve scalability, reduce costs, and enhance business agility. We provide end-to-end cloud services from strategy to implementation and ongoing management.',
      keyBenefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced security and compliance',
        'High availability and disaster recovery',
        'Performance optimization',
        '24/7 monitoring and support',
      ],
      deliverables: [
        'Cloud migration strategy',
        'Infrastructure as Code (IaC)',
        'Cloud architecture design',
        'Migration execution',
        'Security and compliance setup',
        'Monitoring and alerting systems',
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      pricingTier: 'Mid-range to Enterprise',
    },
    {
      id: 'data-analytics',
      icon: BarChart3,
      title: 'Data Analytics & Business Intelligence',
      shortDescription: 'Transform data into actionable insights that drive better business decisions.',
      fullDescription: 'Unlock the full potential of your data with our comprehensive analytics and BI solutions. We help you collect, analyze, and visualize data to gain deep insights and make data-driven decisions.',
      keyBenefits: [
        'Data-driven decision making',
        'Real-time analytics and reporting',
        'Predictive analytics and forecasting',
        'Customer behavior insights',
        'Operational efficiency improvements',
        'Competitive intelligence',
      ],
      deliverables: [
        'Data warehouse design',
        'ETL pipeline development',
        'Interactive dashboards',
        'Custom reports and analytics',
        'Machine learning models',
        'Data governance framework',
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'Apache Spark'],
      pricingTier: 'Mid-range',
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design & Product Strategy',
      shortDescription: 'Create beautiful, intuitive digital experiences that delight your users.',
      fullDescription: 'Design is at the heart of great products. Our design team creates user-centered experiences that are not only visually stunning but also highly functional and accessible.',
      keyBenefits: [
        'User-centered design approach',
        'Increased user engagement and satisfaction',
        'Improved conversion rates',
        'Brand consistency across platforms',
        'Accessibility compliance',
        'Iterative design and testing',
      ],
      deliverables: [
        'User research and personas',
        'Wireframes and prototypes',
        'High-fidelity UI designs',
        'Design system and style guide',
        'Usability testing reports',
        'Design handoff documentation',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      pricingTier: 'Flexible',
    },
    {
      id: 'devops',
      icon: Settings,
      title: 'DevOps & Infrastructure Optimization',
      shortDescription: 'Streamline development and operations for faster, more reliable deployments.',
      fullDescription: 'Implement DevOps best practices to accelerate your software delivery, improve collaboration, and increase deployment frequency while maintaining high quality and stability.',
      keyBenefits: [
        'Faster time to market',
        'Improved deployment frequency',
        'Reduced failure rates',
        'Faster recovery from incidents',
        'Better collaboration between teams',
        'Automated testing and deployment',
      ],
      deliverables: [
        'CI/CD pipeline setup',
        'Infrastructure automation',
        'Monitoring and logging systems',
        'Security and compliance tools',
        'Documentation and runbooks',
        'Team training and best practices',
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Prometheus'],
      pricingTier: 'Mid-range',
    },
  ]

  return (
    <>
      <SEO 
        title="Our Services - AONJI"
        description="Comprehensive digital transformation, software development, cloud solutions, and more. Discover how we can help your business succeed."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-xl text-white mb-6">
              Comprehensive Solutions for{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Every Challenge
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From digital transformation to custom development, we offer a full suite of services 
              designed to propel your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card group cursor-pointer"
                onClick={() => {}}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="heading-sm mb-3 text-navy-900 dark:text-gray-100">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{service.shortDescription}</p>
                
                <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-400 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="heading-md text-navy-900 dark:text-gray-100">{service.title}</h2>
                    <span className="text-primary-600 font-medium">{service.pricingTier}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <div className="mb-6">
                  <h3 className="heading-sm mb-4 text-navy-900 dark:text-gray-100">Key Benefits</h3>
                  <div className="space-y-3">
                    {service.keyBenefits.map((benefit) => (
                      <div key={benefit} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="card">
                  <h3 className="heading-sm mb-4 text-navy-900 dark:text-gray-100">Deliverables</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start space-x-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <h3 className="heading-sm mb-4 text-navy-900 dark:text-gray-100">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn-primary w-full text-center block"
                >
                  Get Started with {service.title}
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-white mb-4">Our Process</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We understand your goals, challenges, and requirements' },
              { step: '02', title: 'Strategy', description: 'We develop a comprehensive plan tailored to your needs' },
              { step: '03', title: 'Execution', description: 'We implement the solution with agility and precision' },
              { step: '04', title: 'Support', description: 'We provide ongoing support and optimization' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-6xl font-bold text-primary-300/30 mb-4">{phase.step}</div>
                <h3 className="heading-sm mb-3">{phase.title}</h3>
                <p className="text-primary-100">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6 text-navy-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule a Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services





