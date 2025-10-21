import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'
import PortfolioCard from '../components/PortfolioCard'
import { X, Calendar, Users, TrendingUp } from 'lucide-react'

interface Project {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
  }[]
  testimonial: {
    text: string
    author: string
    position: string
  }
  images: string[]
  technologies: string[]
  duration: string
  teamSize: number
  year: string
  serviceType: string
}

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'retail', label: 'Retail' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'finance', label: 'Finance' },
    { id: 'technology', label: 'Technology' },
    { id: 'education', label: 'Education' },
  ]

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform Redesign',
      client: 'RetailCo Global',
      industry: 'retail',
      challenge: 'RetailCo\'s outdated e-commerce platform was causing high cart abandonment rates (68%) and poor mobile experience, resulting in significant revenue loss.',
      solution: 'We redesigned the entire platform with a mobile-first approach, implemented a modern tech stack, and optimized the checkout process. Integrated AI-powered product recommendations and real-time inventory management.',
      results: [
        { metric: 'Cart Abandonment Reduced', value: '68% → 28%' },
        { metric: 'Mobile Conversion Rate', value: '+245%' },
        { metric: 'Page Load Time', value: '-70%' },
        { metric: 'Revenue Increase', value: '+180%' },
      ],
      testimonial: {
        text: 'The transformation exceeded our expectations. Our online revenue has nearly tripled, and customer satisfaction scores are at an all-time high.',
        author: 'Jennifer Martinez',
        position: 'VP of Digital Commerce',
      },
      images: ['https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Redis'],
      duration: '6 months',
      teamSize: 8,
      year: '2023',
      serviceType: 'digital-transformation',
    },
    {
      id: '2',
      title: 'Healthcare Management System',
      client: 'MediCare Plus',
      industry: 'healthcare',
      challenge: 'Manual patient record management was causing delays, errors, and HIPAA compliance concerns. Staff spent 40% of their time on administrative tasks.',
      solution: 'Developed a comprehensive healthcare management system with electronic health records (EHR), appointment scheduling, billing integration, and HIPAA-compliant data storage.',
      results: [
        { metric: 'Administrative Time Saved', value: '40%' },
        { metric: 'Patient Wait Time', value: '-50%' },
        { metric: 'Data Entry Errors', value: '-95%' },
        { metric: 'Patient Satisfaction', value: '+85%' },
      ],
      testimonial: {
        text: 'This system has revolutionized our practice. We can now focus more on patient care and less on paperwork.',
        author: 'Dr. Robert Chen',
        position: 'Chief Medical Officer',
      },
      images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'],
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker', 'Azure', 'HL7 FHIR'],
      duration: '8 months',
      teamSize: 10,
      year: '2023',
      serviceType: 'software-development',
    },
    {
      id: '3',
      title: 'Financial Analytics Dashboard',
      client: 'FinanceHub',
      industry: 'finance',
      challenge: 'Financial advisors were struggling with fragmented data sources and lack of real-time insights, making it difficult to provide timely recommendations to clients.',
      solution: 'Built an advanced analytics dashboard with real-time data aggregation from multiple sources, predictive analytics, and customizable reporting. Implemented machine learning for risk assessment.',
      results: [
        { metric: 'Data Processing Time', value: '-90%' },
        { metric: 'Advisor Productivity', value: '+120%' },
        { metric: 'Client Retention', value: '+35%' },
        { metric: 'AUM Growth', value: '+$2.5B' },
      ],
      testimonial: {
        text: 'The insights we can now provide to our clients are unprecedented. This platform has become central to our value proposition.',
        author: 'Michael Thompson',
        position: 'CEO',
      },
      images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'],
      technologies: ['Vue.js', 'Django', 'Redis', 'Kubernetes', 'TensorFlow', 'D3.js'],
      duration: '5 months',
      teamSize: 7,
      year: '2022',
      serviceType: 'data-analytics',
    },
    {
      id: '4',
      title: 'Cloud Migration & Infrastructure',
      client: 'TechVentures Inc',
      industry: 'technology',
      challenge: 'Legacy on-premise infrastructure was limiting scalability, causing frequent downtime, and incurring high maintenance costs of $500K annually.',
      solution: 'Executed a comprehensive cloud migration strategy to AWS, implementing microservices architecture, containerization, and auto-scaling. Set up CI/CD pipelines and monitoring.',
      results: [
        { metric: 'Infrastructure Costs', value: '-65%' },
        { metric: 'System Uptime', value: '99.9%' },
        { metric: 'Deployment Frequency', value: '+10x' },
        { metric: 'Scalability', value: 'Unlimited' },
      ],
      testimonial: {
        text: 'The migration was seamless, and the results speak for themselves. We\'re now able to scale effortlessly and deploy features faster than ever.',
        author: 'Sarah Williams',
        position: 'CTO',
      },
      images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
      duration: '4 months',
      teamSize: 6,
      year: '2022',
      serviceType: 'cloud-solutions',
    },
    {
      id: '5',
      title: 'Learning Management Platform',
      client: 'EduTech Academy',
      industry: 'education',
      challenge: 'Traditional classroom model was limiting reach and accessibility. Needed a comprehensive online learning platform to serve 50,000+ students globally.',
      solution: 'Developed a full-featured LMS with video streaming, interactive assessments, progress tracking, and gamification. Integrated payment processing and certificate generation.',
      results: [
        { metric: 'Student Enrollment', value: '+320%' },
        { metric: 'Course Completion Rate', value: '+45%' },
        { metric: 'Student Satisfaction', value: '4.8/5' },
        { metric: 'Global Reach', value: '80+ countries' },
      ],
      testimonial: {
        text: 'This platform has allowed us to reach students worldwide and provide a learning experience that rivals in-person instruction.',
        author: 'Dr. Emily Rodriguez',
        position: 'Academic Director',
      },
      images: ['https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop'],
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Stripe', 'AWS S3'],
      duration: '7 months',
      teamSize: 9,
      year: '2023',
      serviceType: 'software-development',
    },
    {
      id: '6',
      title: 'Supply Chain Optimization',
      client: 'GlobalLogistics Corp',
      industry: 'retail',
      challenge: 'Inefficient supply chain management was causing delays, excess inventory, and $2M in annual losses due to stockouts and overstocking.',
      solution: 'Implemented an AI-powered supply chain management system with demand forecasting, inventory optimization, and real-time tracking across the entire distribution network.',
      results: [
        { metric: 'Inventory Costs', value: '-45%' },
        { metric: 'Stockout Incidents', value: '-80%' },
        { metric: 'Delivery Time', value: '-30%' },
        { metric: 'Annual Savings', value: '$3.2M' },
      ],
      testimonial: {
        text: 'The ROI has been incredible. We\'ve transformed our supply chain from a cost center to a competitive advantage.',
        author: 'James Anderson',
        position: 'VP of Operations',
      },
      images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'],
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Apache Kafka', 'Tableau', 'AWS'],
      duration: '6 months',
      teamSize: 8,
      year: '2022',
      serviceType: 'data-analytics',
    },
    {
      id: '7',
      title: 'Mobile Banking Application',
      client: 'NextGen Bank',
      industry: 'finance',
      challenge: 'Traditional banking app had low adoption (12%) among younger demographics and poor user experience with a 2.1 app store rating.',
      solution: 'Designed and developed a modern mobile banking app with biometric authentication, instant transfers, budgeting tools, and AI-powered financial advice.',
      results: [
        { metric: 'App Adoption', value: '12% → 67%' },
        { metric: 'App Store Rating', value: '2.1 → 4.7' },
        { metric: 'Digital Transactions', value: '+250%' },
        { metric: 'Customer Service Calls', value: '-40%' },
      ],
      testimonial: {
        text: 'Our new app has become a key differentiator in a competitive market. Customers love it, and it shows in our metrics.',
        author: 'Lisa Chang',
        position: 'Head of Digital Banking',
      },
      images: ['https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'OAuth', 'Plaid API'],
      duration: '5 months',
      teamSize: 7,
      year: '2023',
      serviceType: 'software-development',
    },
    {
      id: '8',
      title: 'IoT Smart Building System',
      client: 'SmartSpaces Properties',
      industry: 'technology',
      challenge: 'Commercial buildings were operating inefficiently with high energy costs and poor tenant experience. No centralized monitoring or control.',
      solution: 'Deployed IoT sensors and developed a smart building management system for energy optimization, predictive maintenance, and tenant comfort automation.',
      results: [
        { metric: 'Energy Costs', value: '-42%' },
        { metric: 'Maintenance Costs', value: '-35%' },
        { metric: 'Tenant Satisfaction', value: '+60%' },
        { metric: 'Carbon Footprint', value: '-38%' },
      ],
      testimonial: {
        text: 'The system pays for itself in energy savings alone. Plus, our tenants love the smart building features.',
        author: 'David Park',
        position: 'Director of Operations',
      },
      images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'],
      technologies: ['IoT', 'Python', 'MQTT', 'InfluxDB', 'Grafana', 'Azure IoT'],
      duration: '8 months',
      teamSize: 10,
      year: '2022',
      serviceType: 'digital-transformation',
    },
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.industry === selectedFilter)

  return (
    <>
      <SEO 
        title="Portfolio - Optimal Solutions"
        description="Explore our portfolio of successful digital transformation and software development projects across various industries."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-xl text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable results 
              through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PortfolioCard
                  title={project.title}
                  client={project.client}
                  industry={project.industry.charAt(0).toUpperCase() + project.industry.slice(1)}
                  image={project.images[0]}
                  technologies={project.technologies}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
                <h2 className="heading-sm text-navy-900">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Project Image */}
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl"
                />

                {/* Project Info */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-semibold">{selectedProject.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary-600" />
                    <div>
                      <div className="text-sm text-gray-600">Team Size</div>
                      <div className="font-semibold">{selectedProject.teamSize} members</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                    <div>
                      <div className="text-sm text-gray-600">Year</div>
                      <div className="font-semibold">{selectedProject.year}</div>
                    </div>
                  </div>
                </div>

                {/* Client & Industry */}
                <div>
                  <h3 className="heading-sm mb-2 text-navy-900">Client</h3>
                  <p className="text-gray-700">{selectedProject.client} • {selectedProject.industry.charAt(0).toUpperCase() + selectedProject.industry.slice(1)}</p>
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="heading-sm mb-2 text-navy-900">The Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="heading-sm mb-2 text-navy-900">Our Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="heading-sm mb-4 text-navy-900">Results & Impact</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.results.map((result) => (
                      <div key={result.metric} className="card bg-primary-50 border-primary-100">
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-700">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="card bg-gray-50">
                  <p className="text-gray-700 italic mb-4">"{selectedProject.testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {selectedProject.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">{selectedProject.testimonial.author}</div>
                      <div className="text-sm text-gray-600">{selectedProject.testimonial.position}</div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="heading-sm mb-3 text-navy-900">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio





