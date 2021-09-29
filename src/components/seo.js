/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({
               lang,
               meta,
               seoInfo,
               siteUrl,
               siteName,
               date
}) {
  const openGraphImage = seoInfo.opengraphImage ? `
                {
                   "@type":"ImageObject",
                   "@id":"${seoInfo.opengraphUrl}#primaryimage",
                   "inLanguage":"en-US",
                   "url":"${seoInfo.opengraphImage.sourceUrl}",
                   "width":${seoInfo.opengraphImage.mediaDetails.width},
                   "height":${seoInfo.opengraphImage.mediaDetails.height},
                   "caption":"${seoInfo.opengraphImage.altText}"
                },` : ``;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoInfo.title}
      titleTemplate={`${seoInfo.title}`}
      meta={[
        {
          name: `description`,
          content: seoInfo.metaDesc
        },
        {
          property: `og:title`,
          content: seoInfo.opengraphTitle
        },
        {
          property: `og:description`,
          content: seoInfo.opengraphDescription
        },
        {
          property: `og:type`,
          content: seoInfo.opengraphType
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Sean`,
        },
        {
          name: `twitter:title`,
          content: seoInfo.title,
        },
        {
          name: `twitter:description`,
          content: seoInfo.metaDesc
        },
      ].concat(meta)}
    >
      <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
      <script type={'application/json-ld'}>
        {`
          {
             "@context":"https://schema.org",
             "@graph":[
                {
                   "@type":"WebSite",
                   "@id":"${siteUrl}/#website",
                   "url":"${siteUrl}/",
                   "name":"${siteName}",
                   "description":"",
                   "potentialAction":[
                      {
                         "@type":"SearchAction",
                         "target":"${siteUrl}/?s={search_term_string}",
                         "query-input":"required name=search_term_string"
                      }
                   ],
                   "inLanguage":"${lang}"
                },${openGraphImage}
                {
                   "@type":"WebPage",
                   "@id":"${seoInfo.opengraphUrl}#webpage",
                   "url":"${seoInfo.opengraphUrl}",
                   "name":"${seoInfo.opengraphTitle}",
                   "isPartOf":{
                      "@id":"${siteUrl}/#website"
                   },
                   "primaryImageOfPage":{
                      "@id":"${seoInfo.opengraphUrl}#primaryimage"
                   },
                   "datePublished":"${date}+00:00",
                   "dateModified":"${seoInfo.opengraphModifiedTime}",
                   "description":"${seoInfo.opengraphDescription}",
                   "inLanguage":"en-US",
                   "potentialAction":[
                      {
                         "@type":"ReadAction",
                         "target":[
                            "${seoInfo.opengraphUrl}"
                         ]
                      }
                   ]
                }
             ]
          }
        `}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  seoInfo: PropTypes.object
}

export default SEO
