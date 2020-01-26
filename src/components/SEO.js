import React from 'react';
import { PropTypes } from 'prop-types';

import Head from 'next/head';

import defaultImage from '../assets/images/logos/logo.png';

function SEO({ title }) {
  const pageTitle = title ? `${title} | Nukta Habari` : "Nukta Habari";
  const imageUrl = `https://nukta.co.tz${defaultImage}`;
  const structuredDataOrganization = `{
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "Nukta Africa",
		"url": "https://nukta.co.tz",
		"logo": "${imageUrl}",
		"contactPoint": [{
      "@type": "ContactPoint",
			"url": "https://nukta.co.tz/contact",
			"email": "info@nukta.co.tz",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressRegion": "Dar-es-salaam",
			"addressCountry": "Tanzania",
		},
		"sameAs": [
			"https://web.facebook.com/NuktaTanzania/",
			"https://twitter.com/NuktaTanzania",
			"https://medium.com/@NuktaAfrica"
		]
    }`;

  return (
    <Head>
      {/* The description that appears under the title of your website appears on search engines results */}
      <meta name="description" content="Nukta hukuletea habari motomoto, makala zilizochambuliwa kwa ufanisi. Wao wanaripoti, sisi tunakuchambulia yanayokuhusu" />

      <meta name="image" content={imageUrl} />

      {/* OpenGraph (Facebook & LinkedIn) */}
      <meta
        property="og:url"
        content="https://nukta.co.tz"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta
        property="og:description"
        content="Nukta hukuletea habari motomoto, makala zilizochambuliwa kwa ufanisi. Wao wanaripoti, sisi tunakuchambulia yanayokuhusu"
      />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card (Twitter & Slack?) */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:site"
        content="@NuktaTanzania"
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta
        name="twitter:description"
        content="Nukta hukuletea habari motomoto, makala zilizochambuliwa kwa ufanisi. Wao wanaripoti, sisi tunakuchambulia yanayokuhusu"
      />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured data (Google) */}
      <script type="application/ld+json">{structuredDataOrganization}</script>

      <title>{pageTitle}</title>
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string
};

SEO.defaultProps = {
  title: undefined
};

export default SEO;
