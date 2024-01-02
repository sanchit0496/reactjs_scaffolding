import React from 'react'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - MySite</title>
        <meta
          name="description"
          content="Learn more about MySite, our mission, values, and the team behind our services."
        />
        <meta
          name="keywords"
          content="About MySite, MySite Team, MySite Mission, Our Services"
        />
        <link rel="canonical" href="http://mysite.com/about" />
        <meta property="og:title" content="About Us - MySite" />
        <meta
          property="og:description"
          content="Learn more about MySite, our mission, values, and the team behind our services."
        />
        <meta property="og:url" content="http://mysite.com/about" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="About Us - MySite" />
        <meta
          property="twitter:description"
          content="Learn more about MySite, our mission, values, and the team behind our services."
        />
        {/* Add more meta tags as needed */}
      </Helmet>
      About
    </div>
  )
}

export default About
