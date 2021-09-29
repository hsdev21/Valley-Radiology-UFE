import { useStaticQuery, graphql } from "gatsby";

export const GetHomePageMeta = () => {
    const { wpcontent } = useStaticQuery(graphql`
          query GetHomePageQuery {
          wpcontent {
            seo {
              schema {
                siteUrl
                siteName
              }
            }
            pages(where: {title: "Home"}) {
              nodes {
                  date
                  seo {
                      metaDesc
                      metaKeywords
                      opengraphAuthor
                      opengraphDescription
                      opengraphImage {
                        altText
                        sourceUrl
                        mediaDetails {
                            height
                            width
                        }
                      }
                      opengraphModifiedTime
                      opengraphPublishedTime
                      opengraphPublisher
                      opengraphSiteName
                      opengraphTitle
                      opengraphType
                      opengraphUrl
                      title
                    }
                }
            }
          }
        }
    `)
    return wpcontent
}
