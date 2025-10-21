import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import TeamMemberCard from '../components/TeamMemberCard'
import { Target, Eye, Heart, Award, Lightbulb, Users2, ShieldCheck, TrendingUp } from 'lucide-react'

const About = () => {
  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2012', title: 'First Major Contract', description: 'Secured partnership with Fortune 500 company' },
    { year: '2015', title: 'International Expansion', description: 'Opened offices in Europe and Asia' },
    { year: '2018', title: 'Award Recognition', description: 'Named "Best Digital Transformation Partner"' },
    { year: '2020', title: 'Innovation Lab', description: 'Launched R&D division for emerging technologies' },
    { year: '2023', title: '250+ Projects', description: 'Reached milestone of 250 successful projects delivered' },
  ]

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
    },
    {
      icon: Users2,
      title: 'Client-Centric',
      description: 'Your success is our success. We prioritize your needs and goals in every decision.',
    },
  ]

  const team = [
    {
      name: 'David Anderson',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 20+ years of experience in digital transformation and enterprise software.',
      avatar: 'https://i.pravatar.cc/150?img=12',
      expertise: ['Strategy', 'Leadership', 'Innovation'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david.anderson@optimalsolutions.com',
      },
    },
    {
      name: 'Jennifer Lee',
      position: 'CTO',
      bio: 'Technology expert specializing in cloud architecture, AI/ML, and scalable system design.',
      avatar: 'https://i.pravatar.cc/150?img=45',
      expertise: ['Cloud', 'AI/ML', 'Architecture'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jennifer.lee@optimalsolutions.com',
      },
    },
    {
      name: 'Marcus Williams',
      position: 'Head of Design',
      bio: 'Award-winning designer passionate about creating beautiful, user-centric digital experiences.',
      avatar: 'https://i.pravatar.cc/150?img=14',
      expertise: ['UI/UX', 'Branding', 'Product Design'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'marcus.williams@optimalsolutions.com',
      },
    },
    {
      name: 'Sophia Martinez',
      position: 'VP of Engineering',
      bio: 'Engineering leader with expertise in building high-performing teams and scalable products.',
      avatar: 'https://i.pravatar.cc/150?img=47',
      expertise: ['Engineering', 'DevOps', 'Agile'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sophia.martinez@optimalsolutions.com',
      },
    },
    {
      name: 'Robert Chen',
      position: 'Head of Data Science',
      bio: 'Data scientist and analytics expert helping clients unlock insights from their data.',
      avatar: 'https://i.pravatar.cc/150?img=15',
      expertise: ['Data Science', 'Analytics', 'ML'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'robert.chen@optimalsolutions.com',
      },
    },
    {
      name: 'Emma Thompson',
      position: 'Client Success Director',
      bio: 'Dedicated to ensuring client satisfaction and building long-lasting partnerships.',
      avatar: 'https://i.pravatar.cc/150?img=48',
      expertise: ['Client Relations', 'Strategy', 'Support'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emma.thompson@optimalsolutions.com',
      },
    },
  ]

  const awards = [
    { year: '2023', title: 'Best Digital Transformation Partner', organization: 'Tech Excellence Awards' },
    { year: '2022', title: 'Top 10 Software Development Company', organization: 'Industry Leaders Magazine' },
    { year: '2021', title: 'Innovation in Cloud Solutions', organization: 'Cloud Computing Summit' },
    { year: '2020', title: 'Excellence in Customer Service', organization: 'Business Excellence Awards' },
  ]

  return (
    <>
      <SEO 
        title="About Us - Optimal Solutions"
        description="Learn about Optimal Solutions, our mission, values, and the team behind our success."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-xl text-white mb-6">
              Transforming Businesses Through{' '}
              <span className="gradient-text">Innovation & Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Since 2008, we've been helping organizations navigate the digital landscape 
              and achieve extraordinary results through optimal solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <Target className="w-12 h-12 text-primary-600 mb-4" />
              <h2 className="heading-md mb-4 text-navy-900 dark:text-gray-100">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower businesses with innovative technology solutions that solve complex challenges, 
                drive growth, and create lasting value. We believe in the power of optimal thinking - 
                finding the best possible solution for every unique situation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <Eye className="w-12 h-12 text-primary-600 mb-4" />
              <h2 className="heading-md mb-4 text-navy-900 dark:text-gray-100">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the world's most trusted partner in digital transformation, known for our 
                innovation, excellence, and unwavering commitment to client success. We envision a 
                future where technology seamlessly enhances every aspect of business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">9
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4 text-navy-900 dark:text-gray-100">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Milestones that shaped our story</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="card">
                      <span className="text-primary-600 font-bold text-2xl">{milestone.year}</span>
                      <h3 className="heading-sm mt-2 mb-2 text-navy-900 dark:text-gray-100">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4 text-navy-900 dark:text-gray-100">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-sm mb-3 text-navy-900 dark:text-gray-100">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4 text-navy-900 dark:text-gray-100">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4 text-navy-900 dark:text-gray-100">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Celebrating excellence and industry leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-shadow"
              >
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-primary-600 font-bold mb-2">{award.year}</div>
                <h3 className="font-semibold text-navy-900 dark:text-gray-100 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: TrendingUp, value: '250+', label: 'Projects Delivered' },
              { icon: Users2, value: '150+', label: 'Happy Clients' },
              { icon: Award, value: '25+', label: 'Industry Awards' },
              { icon: ShieldCheck, value: '98%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About





