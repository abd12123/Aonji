import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

const SEO = ({ 
  title = 'Optimal Solutions - Digital Transformation & Software Development',
  description = 'Creating optimal solutions for complex challenges. We transform businesses through innovative technology and strategic thinking.',
  keywords = 'digital transformation, software development, cloud solutions, data analytics, UI/UX design, DevOps',
  ogImage = '/og-image.jpg'
}: SEOProps) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'http://localhost:3000'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  )
}

export default SEO










